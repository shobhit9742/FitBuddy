import React from 'react'
import styled from 'styled-components';
import { Link as NavLink } from "react-router-dom";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

export const CalculaterHeader = () => {
    return (
      <Nav>
      <NavContainer>
        <NavItems>
          <Navlink to="/Calculater/Calcu1">Calculater1</Navlink>
          <Navlink to="/Calculater/Calcu2">Calculater2</Navlink>
          <Navlink to="/Calculater/Calcu3">Calculater3</Navlink>
          <Navlink to="/Calculater/Calcu4">Calculater4</Navlink>
          <Navlink to="/Calculater/Calcu5">Calculater5</Navlink>
        </NavItems>
      </NavContainer>
    </Nav>
      )
}
