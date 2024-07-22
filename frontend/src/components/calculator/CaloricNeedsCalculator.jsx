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

const CaloricNeedsCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintain');
  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateCaloricNeeds = (e) => {
    e.preventDefault();

    const wt = parseFloat(weight);
    const ht = parseFloat(height);
    const ag = parseFloat(age);

    let bmr;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * wt + 4.799 * ht - 5.677 * ag;
    } else {
      bmr = 447.593 + 9.247 * wt + 3.098 * ht - 4.33 * ag;
    }
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * wt + 4.799 * ht - 5.677 * ag;
    } else {
      bmr = 447.593 + 9.247 * wt + 3.098 * ht - 4.33 * ag;
    }

    let tdee;

    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'light':
        tdee = bmr * 1.375;
        break;
      case 'moderate':
        tdee = bmr * 1.55;
        break;
      case 'active':
        tdee = bmr * 1.725;
        break;
      case 'very active':
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr * 1.2;
    }

    let caloricNeedsValue;

    switch (goal) {
      case 'lose':
        caloricNeedsValue = tdee - 500; // Rough estimate to lose weight
        break;
      case 'gain':
        caloricNeedsValue = tdee + 500; // Rough estimate to gain weight
        break;
      case 'maintain':
      default:
        caloricNeedsValue = tdee;
    }

    setCaloricNeeds(caloricNeedsValue.toFixed(2));
  };

  return (
    <PageWrapper>
      <HeaderBar>
        <HeaderTitle>UNDERSTANDING CALORIC NEEDS</HeaderTitle>
        <HeaderInfo>
          A calorie is a unit of energy. This power that the body needs to move and maintain its temperature is called energy. The nutrients we take into our body turn into energy, but after meeting the energy need, the excess calories turn into fat molecules and cause the body to fat.
        </HeaderInfo>
      </HeaderBar>
      <CalculatorContainer>
        <CalculatorTitle>Caloric Needs Calculator</CalculatorTitle>
        <Form onSubmit={calculateCaloricNeeds}>
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
            <Label>Gender:</Label>
            <Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
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
          <FormRow>
            <Label>Height (cm):</Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Activity Level:</Label>
            <Select
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
            </Select>
          </FormRow>
          <FormRow>
            <Label>Goal:</Label>
            <Select value={goal} onChange={(e) => setGoal(e.target.value)}>
              <option value="maintain">Maintain Weight</option>
              <option value="lose">Lose Weight</option>
              <option value="gain">Gain Weight</option>
            </Select>
          </FormRow>
          <Button type="submit">Calculate</Button>
        </Form>
        {caloricNeeds && (
          <Result>
            <h2>Your Daily Caloric Needs: {caloricNeeds} calories</h2>
          </Result>
        )}
        <h2>CALORIES IN COMMON FRUITS</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Food</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>Calories</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Apple</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>95</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Banana</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>105</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mango</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>110</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Orange</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pear</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>62</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Watermelon</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </CalculatorContainer>
    </PageWrapper>
  );
};

export default CaloricNeedsCalculator;