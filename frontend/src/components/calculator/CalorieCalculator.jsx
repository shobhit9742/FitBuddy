// src/CalorieCalculator.js
import React, { useState } from "react";

const CalorieCalculator = () => {
  const [heartRate, setHeartRate] = useState("");
  const [duration, setDuration] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();

    const hr = parseFloat(heartRate);
    const dur = parseFloat(duration);
    const ag = parseFloat(age);
    const wt = parseFloat(weight);

    let calories;
    if (gender === "male") {
      calories =
        ((-55.0969 + 0.6309 * hr + 0.1988 * wt + 0.2017 * ag) / 4.184) *
        60 *
        (dur / 60);
    } else {
      calories =
        ((-20.4022 + 0.4472 * hr - 0.1263 * wt + 0.074 * ag) / 4.184) *
        60 *
        (dur / 60);
    }

    setCaloriesBurned(calories.toFixed(2));
  };

  return (
    <div>
      <h1>Calorie Burn Calculator</h1>
      <form onSubmit={calculateCalories}>
        <div>
          <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Heart Rate (bpm):</label>
            <input
              type="number"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Duration (minutes):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit">Calculate</button>
      </form>
      {caloriesBurned !== null && (
        <div>
          <h2>Calories Burned: {caloriesBurned}</h2>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
