import express from 'express';
import { getAllMeals, addMeal, getMealById, getMealsByDate, deleteMeal, updateMeal } from '../controllers/mealController.js';
import {verifyToken} from "../middleware/verifyToken.js"

const router = express.Router();

router.post("/addMeal", verifyToken, addMeal);
router.get("/getAllMeals", getAllMeals);
router.put("/meal/:id", verifyToken, updateMeal);
router.delete("/meal/:id", verifyToken, deleteMeal);
router.get('/meals', getMealsByDate);
export default router;
