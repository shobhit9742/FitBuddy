const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    category:{
        type: String,
        required: true, 
    },
    workoutName: {
        type: String,
        required: true,
        unique: true,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    caloriesBurned: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const workoutCollection = mongoose.model("Workouts", workoutSchema);
module.exports = workoutCollection;