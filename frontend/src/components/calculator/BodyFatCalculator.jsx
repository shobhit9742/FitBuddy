import React, { useState } from "react";

const BodyFatCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hips, setHips] = useState("");
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();

    const wt = parseFloat(weight);
    const ws = parseFloat(waist);
    const nk = parseFloat(neck);
    const hp = parseFloat(hips);

    let bodyFatPercentage;

    if (gender === "male") {
      bodyFatPercentage =
        495 /
          (1.0324 -
            0.19077 * Math.log10(ws - nk) +
            0.15456 * Math.log10(wt * 2.20462)) -
        450;
    } else {
      bodyFatPercentage =
        495 /
          (1.29579 -
            0.35004 * Math.log10(ws + hp - nk) +
            0.221 * Math.log10(wt * 2.20462)) -
        450;
    }

    setBodyFat(bodyFatPercentage.toFixed(2));
  };

  return (
    <div>
      <h1>Body Fat Percentage Calculator</h1>
      <form onSubmit={calculateBodyFat}>
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
          <label>Waist Circumference (cm):</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Neck Circumference (cm):</label>
          <input
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            required
          />
        </div>
        {gender === "female" && (
          <div>
            <label>Hip Circumference (cm):</label>
            <input
              type="number"
              value={hips}
              onChange={(e) => setHips(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Calculate</button>
      </form>
      {bodyFat && (
        <div>
          <h2>Your Body Fat Percentage: {bodyFat}%</h2>
        </div>
      )}
    </div>
  );
};

export default BodyFatCalculator;
