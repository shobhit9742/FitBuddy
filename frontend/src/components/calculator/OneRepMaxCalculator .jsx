// src/OneRepMaxCalculator.js
import React, { useState } from 'react';

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [oneRepMax, setOneRepMax] = useState(null);

  const calculateOneRepMax = (e) => {
    e.preventDefault();

    const wt = parseFloat(weight);
    const rp = parseFloat(reps);

    if (wt > 0 && rp > 0) {
      const oneRepMaxValue = wt * (1 + rp / 30);
      setOneRepMax(oneRepMaxValue.toFixed(2));
    } else {
      setOneRepMax(null);
    }
  };

  return (
    <div>
      <h1>One-Rep Max (1RM) Calculator</h1>
      <form onSubmit={calculateOneRepMax}>
        <div>
          <label>Weight Lifted (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Repetitions:</label>
          <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {oneRepMax && (
        <div>
          <h2>Your One-Rep Max: {oneRepMax} kg</h2>
        </div>
      )}
    </div>
  );
};

export default OneRepMaxCalculator;
