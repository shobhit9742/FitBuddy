import React, { useState } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background_primary};
  overflow-y: auto;
  padding: 20px;
`;

const HeaderBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.header_background};
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:#2a2a2a;
  color:white;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.header_text};
  margin: 0 0 10px 0;
`;

const HeaderInfo = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.header_text_secondary};
  margin: 0;
  max-width:60%;
  text-align: center;  
  line-height: 1.5;
`;

const CalculatorContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(5, 2, 0, 0.5);
  max-width: 400px;
  width: 80%;
  margin: 0 auto;
  margin-bottom:30px;
`;

const CalculatorTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const Result = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const InfoBox = styled.div`
  margin-top: 90px;
  padding: 20px;
  background-color: ${({ theme }) => theme.info_background};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  max-width: 60%;
  width: 90%;
  margin: 0 auto;
`;

const InfoHeader = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.info_header};
  margin-bottom: 15px;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.info_text};
  margin-bottom: 12px;
`;

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

  const renderInfo = () => {
    return (
      <InfoBox>
        <InfoHeader>UNDERSTANDING YOUR BODY MASS INDEX</InfoHeader>
        {bmi < 18.5 && (
          <InfoText>
            Your BMI is considered underweight. Keep in mind that an underweight BMI calculation may pose certain health risks. Please consult your healthcare provider for more information about BMI calculations.
          </InfoText>
        )}
        {bmi >= 18.5 && bmi < 24.9 && (
          <InfoText>
            Your BMI is considered normal. This healthy weight helps reduce your risk of serious health conditions and means you’re close to your fitness goals.
          </InfoText>
        )}
        {bmi >= 25 && bmi < 29.9 && (
          <InfoText>
            You’re in the overweight range. You are at increased risk for a variety of illnesses at your present weight. You should lose weight by changing your diet and exercising more.
          </InfoText>
        )}
        {bmi >= 30 && (
          <InfoText>
            Your BMI is considered overweight. Being overweight may increase your risk of cardiovascular disease. Consider making lifestyle changes through healthy eating and fitness to improve your health.
          </InfoText>
        )}
        <InfoText>
          Individuals who fall into the BMI range of 25 to 34.9, and have a waist size of over 40 inches for men and 35 inches for women, are considered to be at especially high risk for health problems.
        </InfoText>
      </InfoBox>
    );
  };

  return (
    <PageWrapper>
      <HeaderBar>
        <HeaderTitle>BMI CALCULATOR</HeaderTitle>
        <HeaderInfo>
          Knowing BMI can help adult men and women understand their overall health. Use the BMI calculator below to determine your body mass index by inputting your height and weight.
        </HeaderInfo>
      </HeaderBar>
      <CalculatorContainer>
        <CalculatorTitle>Calculate Your BMI</CalculatorTitle>
        <Form onSubmit={calculateBMI}>
          <FormRow>
            <Label>Height (cm) :</Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Weight (kg) :</Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </FormRow>
          <Button type="submit">Calculate</Button>
        </Form>
        {bmi && (
          <Result>
            <h2>Your BMI : {bmi}</h2>
            <h3>Category : {bmiCategory}</h3>
          </Result>
        )}
      </CalculatorContainer>
      {bmi && renderInfo()}
    </PageWrapper>
  );
};

export default BMICalculator;
