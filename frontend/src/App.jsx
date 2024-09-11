import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import {Workouts} from "./pages/Workouts";
import PersonalFoods from "./PersonalFoodPage";
import MealTracker from "./components/MealTracker";

import { Authentication } from "./pages/Authentication";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Calculater } from "./pages/Calculater";
import Exercises from "./components/Exercises";

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

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/personal-foods" exact element={<PersonalFoods />}/>
              <Route path="/meal-tracker" exact element={<MealTracker />} />
              <Route path="/Contact" exact element={<Contact />} />
              <Route path="/Calculater/*" exact element={<Calculater />} />
              <Route path="/exercises" exact element={<Exercises />} />

            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

