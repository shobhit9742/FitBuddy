import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    let category = '';
    if (bmiValue < 18.5) {
      category = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    setBMICategory(category);
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
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
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {bmiCategory}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
