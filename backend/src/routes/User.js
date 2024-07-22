import express from "express";
import { getFoodByName, getAllFoods } from "../controllers/foodController.js";

import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { addMeal, getMealsByDate } from "../controllers/mealController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.get("/meal", verifyToken, getMealsByDate);
router.post("/workout", verifyToken, addWorkout);
router.get("/search", getFoodByName);
router.get("/all", getAllFoods);

export default router;
