import styled from "styled-components";
import TextInput from "./TextInput";
import { useState } from "react";
import { Button } from "@mui/material";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AddWorkout = ({ workout, setWorkout }) => {
  const [buttonLoading, setButtonLoading] = useState(false);

  const addNewWorkout = () => {
    // Add your logic to add a new workout here
    console.log("Add new workout button clicked!");
    setButtonLoading(true);
    // Simulate a delay to demonstrate the loading state
    setTimeout(() => {
      setButtonLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <Title>Add New Workout</Title>
      <TextInput
        label="Workout"
        textArea={10}
        placeholder={`Enter in this format:

          #Category
          -Workout Name
          -Sets
          -Reps
          -Weight
          -Duration`}
        value={workout}
        handleChange={(e) => setWorkout(e.target.value)}
      />
      <Button
        text="Add Workout"
        small
        onClick={addNewWorkout}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};