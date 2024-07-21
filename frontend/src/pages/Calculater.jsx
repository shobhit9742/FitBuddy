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
        <Route path="Calculator1" element={<BMICalculator />} />
        <Route path="Calculator2" element={<BodyFatCalculator />} />
        <Route path="Calculator3" element={<CaloricNeedsCalculator />} />
        <Route path="Calculator4" element={<CalorieCalculator />} />
        <Route path="Calculator5" element={<OneRepMaxCalculator />} />
      </Routes>
    </Container>
  );
};
