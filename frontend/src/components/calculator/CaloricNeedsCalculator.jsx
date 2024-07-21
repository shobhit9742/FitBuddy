import React, { useState } from "react";

const CaloricNeedsCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintain");
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateCaloricNeeds = (e) => {
    e.preventDefault();

    const wt = parseFloat(weight);
    const ht = parseFloat(height);
    const ag = parseFloat(age);

    let bmr;

    if (gender === "male") {
      bmr = 88.362 + 13.397 * wt + 4.799 * ht - 5.677 * ag;
    } else {
      bmr = 447.593 + 9.247 * wt + 3.098 * ht - 4.33 * ag;
    }

    let tdee;

    switch (activityLevel) {
      case "sedentary":
        tdee = bmr * 1.2;
        break;
      case "light":
        tdee = bmr * 1.375;
        break;
      case "moderate":
        tdee = bmr * 1.55;
        break;
      case "active":
        tdee = bmr * 1.725;
        break;
      case "very active":
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr * 1.2;
    }

    let caloricNeedsValue;

    switch (goal) {
      case "lose":
        caloricNeedsValue = tdee - 500; // Rough estimate to lose weight
        break;
      case "gain":
        caloricNeedsValue = tdee + 500; // Rough estimate to gain weight
        break;
      case "maintain":
      default:
        caloricNeedsValue = tdee;
    }

    setCaloricNeeds(caloricNeedsValue.toFixed(2));
  };

  return (
    <div>
      <h1>Caloric Needs Calculator</h1>
      <form onSubmit={calculateCaloricNeeds}>
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
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Activity Level:</label>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">
              Light (light exercise/sports 1-3 days/week)
            </option>
            <option value="moderate">
              Moderate (moderate exercise/sports 3-5 days/week)
            </option>
            <option value="active">
              Active (hard exercise/sports 6-7 days a week)
            </option>
            <option value="very active">
              Very Active (very hard exercise/sports & physical job)
            </option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="maintain">Maintain Weight</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {caloricNeeds && (
        <div>
          <h2>Your Daily Caloric Needs: {caloricNeeds} calories</h2>
        </div>
      )}
    </div>
  );
};

export default CaloricNeedsCalculator;
