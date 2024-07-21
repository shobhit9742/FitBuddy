// src/components/MealCard.jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;
const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Details = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const NutritionInfo = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const MealCard = ({ meal }) => {
  return (
    <Card>
      <Category>#{meal?.category}</Category>
      <Name>{meal?.name}</Name>
      <NutritionInfo>
        <Details>Calories: {meal?.calories} kcal</Details>
        <Details>Protein: {meal?.protein} g</Details>
        <Details>Carbs: {meal?.carbs} g</Details>
        <Details>Fat: {meal?.fat} g</Details>
      </NutritionInfo>
    </Card>
  );
};

export default MealCard;
