import Food from '../models/Food.js';

export const getFoodByName = async (req, res) => {
  try {
    const { name } = req.query; 
    if (!name) {
      return res.status(400).json({ error: "Name query parameter is required" });
    }
    const food = await Food.find({ name: new RegExp(name, 'i') });
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
