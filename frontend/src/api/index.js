import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  export const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/foods'); 
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  export const getMeals = async (token, queryParams = '') => {
    try {
      const response = await API.get(`/getAllMeals`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching meals:', error);
      throw error;
    }
  };