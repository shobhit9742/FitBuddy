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

const Result = styled.div`
  margin-top: 40px; /* Increased margin to separate from calculator box */
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

const BodyFatCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hips, setHips] = useState('');
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();

    const wt = parseFloat(weight);
    const ws = parseFloat(waist);
    const nk = parseFloat(neck);
    const hp = parseFloat(hips);

    let bodyFatPercentage;

    if (gender === 'male') {
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
    <PageWrapper>
      <HeaderBar>
        <HeaderTitle>DETERMINE YOUR BODY FAT PERCENTAGE</HeaderTitle>
        <HeaderInfo>
          Use a tape measure to determine your waist, hip, and neck circumference. Then input your gender and measurements below to receive a body fat index based on average values.
        </HeaderInfo>
      </HeaderBar>
      <CalculatorContainer>
        <CalculatorTitle>Body Fat Percentage Calculator</CalculatorTitle>
        <Form onSubmit={calculateBodyFat}>
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
            <Label>Waist Circumference (cm):</Label>
            <Input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Neck Circumference (cm):</Label>
            <Input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              required
            />
          </FormRow>
          {gender === 'female' && (
            <FormRow>
              <Label>Hip Circumference (cm):</Label>
              <Input
                type="number"
                value={hips}
                onChange={(e) => setHips(e.target.value)}
                required
              />
            </FormRow>
          )}
          <Button type="submit">Calculate</Button>
        </Form>
        {bodyFat && (
          <Result>
            <h2>Your Body Fat Percentage: {bodyFat}%</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Classification</TableHeader>
                  <TableHeader>Women (% Fat)</TableHeader>
                  <TableHeader>Men (% Fat)</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>Essential Fat</TableCell>
                  <TableCell>10-13%</TableCell>
                  <TableCell>2-5%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athletes</TableCell>
                  <TableCell>14-20%</TableCell>
                  <TableCell>6-13%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fitness</TableCell>
                  <TableCell>21-24%</TableCell>
                  <TableCell>14-17%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acceptable</TableCell>
                  <TableCell>25-31%</TableCell>
                  <TableCell>18-25%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Obese</TableCell>
                  <TableCell>32%+</TableCell>
                  <TableCell>25%+</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </Result>
        )}
      </CalculatorContainer>
    </PageWrapper>
  );
};

export default BodyFatCalculator;
