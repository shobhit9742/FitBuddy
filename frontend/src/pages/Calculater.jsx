import React from "react";
import styled from "styled-components";
import { CalculaterHeader } from "../components/CalculaterHeader";
import { Route, Routes } from "react-router-dom";
import BMICalculator from "../components/calculator/BMICalculator";
import BodyFatCalculator from "../components/calculator/BodyFatCalculator";
import CaloricNeedsCalculator from "../components/calculator/CaloricNeedsCalculator";
import CalorieCalculator from "../components/calculator/CalorieCalculator";
import OneRepMaxCalculator from "../components/calculator/OneRepMaxCalculator";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

export const Calculater = () => {
  return (
    <Container>
      <CalculaterHeader />
      <Routes>
        <Route path="BMI-Calculator" element={<BMICalculator />} />
        <Route path="Body-Fat" element={<BodyFatCalculator />} />
        <Route path="Caloric-Needs" element={<CaloricNeedsCalculator />} />
        <Route path="Calories-Burn" element={<CalorieCalculator />} />
        <Route path="One-Rep-Max" element={<OneRepMaxCalculator />} />
      </Routes>
    </Container>
  );
};
