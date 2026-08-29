import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://mern-portfolio-backend-xmd6.onrender.com/api";

console.log("API URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default api;