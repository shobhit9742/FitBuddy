import { createError } from '../error.js';
import Meals from '../models/Meals.js';

export const getAllMeals = async (req, res) => {
  try {
    const meals = await Meals.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meals", error });
  }
};

// Add a new meal
export const addMeal = async (req, res, next) => {
  try {
    const userId = req.user?.id; // Ensure user authentication is handled correctly
    if (!userId) {
      return next(createError(401, "User not authenticated"));
    }

    const mealData = req.body;
    if (!mealData) {
      return next(createError(400, "Meal data is missing"));
    }

    const { name, category, calories, protein, carbs, fat } = mealData;

    if (!name || !category || !calories || !protein || !carbs || !fat) {
      return next(createError(400, "Missing required fields in meal data"));
    }

    const mealDetails = {
      name,
      category,
      calories,
      protein,
      carbs,
      fat,
      userId,
      date: new Date(),
    };

    const newMeal = await Meals.create(mealDetails);

    return res.status(201).json({
      message: "Meal added successfully",
      meal: newMeal,
    });
  } catch (err) {
    next(err);
  }
};

// Get a meal by ID
export const getMealById = async (req, res) => {
  try {
    const meal = await Meals.findById(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json(meal);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meal", error });
  }
};

// Update a meal by ID
export const updateMeal = async (req, res) => {
  try {
    const meal = await Meals.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json(meal);
  } catch (error) {
    res.status(500).json({ message: "Error updating meal", error });
  }
};

// Delete a meal by ID
export const deleteMeal = async (req, res) => {
  try {
    const meal = await Meals.findByIdAndDelete(req.params.id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting meal", error });
  }
};



export const getMealsByDate = async (req, res) => {
  const { date } = req.query;
  const userId = req.user.id;

  try {
    const meals = await Meals.find({
      userId: userId,
      date: {
        $gte: new Date(date).setHours(0, 0, 0, 0),
        $lt: new Date(date).setHours(23, 59, 59, 999),
      },
    });

    res.status(200).json({ meals });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};