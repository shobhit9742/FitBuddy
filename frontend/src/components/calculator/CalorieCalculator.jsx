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
  background: #2a2a2a;
  color: white;
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
  max-width: 60%;
  text-align: center;
  line-height: 1.5;
`;

const CalculatorContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(5, 2, 0, 0.5);
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const CalculatorTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  flex: 1;
  min-width: 150px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
  flex: 2;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.border_color};
  border-radius: 4px;
  flex: 2;
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: ${({ theme }) => theme.table_header_bg};
  color: ${({ theme }) => theme.table_header_text};
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.table_row_even_bg};
  }
`;

const CalorieCalculator = () => {
  const [heartRate, setHeartRate] = useState('');
  const [duration, setDuration] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateCalories = (e) => {
    e.preventDefault();

    const hr = parseFloat(heartRate);
    const dur = parseFloat(duration);
    const ag = parseFloat(age);
    const wt = parseFloat(weight);

    let calories;
    if (gender === 'male') {
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
    <PageWrapper>
      <HeaderBar>
        <HeaderTitle>CALCULATE THE CALORIES BURNED BY HEART RATE</HeaderTitle>
        <HeaderInfo>
          Burning more calories become easier with a better knowledge of the connection between the heart rate and the metabolism process.
        </HeaderInfo>
      </HeaderBar>
      <CalculatorContainer>
        <CalculatorTitle>Calorie Burn Calculator</CalculatorTitle>
        <Form onSubmit={calculateCalories}>
          <FormRow>
            <Label>Gender:</Label>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormRow>
          <FormRow>
            <Label>Heart Rate (bpm):</Label>
            <Input
              type="number"
              value={heartRate}
              onChange={(e) => setHeartRate(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Duration (minutes):</Label>
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Age:</Label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Weight (kg):</Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </FormRow>
          <Button type="submit">Calculate</Button>
        </Form>
        {caloriesBurned !== null && (
          <Result>
            <h2>Calories Burned: {caloriesBurned}</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>(30 min)Exercise Intensity</TableHeader>
                  <TableHeader>Fat Calories Burned</TableHeader>
                  <TableHeader>Glycogen Calories Burned</TableHeader>
                  <TableHeader>Total Calories Burned</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>Low Intensity Group (50%)</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>80</TableCell>
                  <TableCell>200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High Intensity Group (75%)</TableCell>
                  <TableCell>140</TableCell>
                  <TableCell>260</TableCell>
                  <TableCell>400</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </Result>
        )}
      </CalculatorContainer>
    </PageWrapper>
  );
};

export default CalorieCalculator;