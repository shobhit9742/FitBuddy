import axios from "axios";

const API = axios.create({
  baseURL: "https://testing-435o.onrender.com/api",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date = "") =>
  API.get(`/user/workout${date ? `?date=${date}` : ""}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://testing-435o.onrender.com/api/food"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getMeals = async (token, queryParams = "") => {
  try {
    const response = await API.get(`/getAllMeals${queryParams}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};
