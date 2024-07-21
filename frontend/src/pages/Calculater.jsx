import React from "react";
import styled from "styled-components";
import { CalculaterHeader } from "../components/CalculaterHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calcu1 from "../CalculaterPages/Calcu1";
import Calcu2 from "../CalculaterPages/Calcu2";
import Calcu3 from "../CalculaterPages/Calcu3";
import Calcu4 from "../CalculaterPages/Calcu4";
import Calcu5 from "../CalculaterPages/Calcu5";

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
        <Route path="/Calculater/Calcu1" element={<Calcu1/>} />
        <Route path="/Calculater/Calcu2" element={<Calcu2/>} />
        <Route path="/Calculater/Calcu3" element={<Calcu3/>} />
        <Route path="/Calculater/Calcu4" element={<Calcu4/>} />
        <Route path="/Calculater/Calcu5" element={<Calcu5/>} />
      </Routes>
    </Container>
  );
};
