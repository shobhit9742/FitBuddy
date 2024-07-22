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
    <PageWrapper>
      <HeaderBar>
        <HeaderTitle>CALCULATE YOUR ONE-REP MAX (1RM)</HeaderTitle>
        <HeaderInfo>
          <ol>
            <li>1. Input Weight Lifted</li>
            <li>2. Input Number of Reps</li>
            <li>3. Calculate</li>
            </ol>
          <p>For example, if you were performing bench presses and lifted 90 kilograms for 5 repetitions, you would enter “90” as the weight and “5” as the number of reps into the 1RM calculator.</p>
        </HeaderInfo>
      </HeaderBar>
      <CalculatorContainer>
        <CalculatorTitle>One-Rep Max (1RM) Calculator</CalculatorTitle>
        <Form onSubmit={calculateOneRepMax}>
          <FormRow>
            <Label>Weight Lifted (kg):</Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Repetitions:</Label>
            <Input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </FormRow>
          <Button type="submit">Calculate</Button>
        </Form>
        {oneRepMax && (
          <Result>
            <h2>Your One-Rep Max: {oneRepMax} kg</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Training Goal</TableHeader>
                  <TableHeader>Sets</TableHeader>
                  <TableHeader>Reps</TableHeader>
                  <TableHeader>Rest Period</TableHeader>
                  <TableHeader>Intensity / Weight</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell>General fitness</TableCell>
                  <TableCell>1-3</TableCell>
                  <TableCell>12-15</TableCell>
                  <TableCell>30 to 90 seconds</TableCell>
                  <TableCell>Varies</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Endurance</TableCell>
                  <TableCell>2-4</TableCell>
                  <TableCell>12-20</TableCell>
                  <TableCell>Up to 30 seconds</TableCell>
                  <TableCell>&lt;67% of 1RM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hypertrophy</TableCell>
                  <TableCell>3-6</TableCell>
                  <TableCell>6-12</TableCell>
                  <TableCell>30 to 90 seconds</TableCell>
                  <TableCell>60% to 85% of 1RM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Muscle strength</TableCell>
                  <TableCell>2-6</TableCell>
                  <TableCell>&lt;6</TableCell>
                  <TableCell>2 to 5 minutes</TableCell>
                  <TableCell>&gt;85% of 1RM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Power: Single rep</TableCell>
                  <TableCell>3-5</TableCell>
                  <TableCell>1-2</TableCell>
                  <TableCell>2 to 5 minutes</TableCell>
                  <TableCell>80%–90% of 1RM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Muscle Power</TableCell>
                  <TableCell>3-6</TableCell>
                  <TableCell>1-3</TableCell>
                  <TableCell>2 to 5 minutes</TableCell>
                  <TableCell>30%–60% of RM</TableCell>
                </TableRow>
              </tbody>
            </Table>
          </Result>
        )}
      </CalculatorContainer>
    </PageWrapper>
  );
};

export default OneRepMaxCalculator;