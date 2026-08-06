import axios from "axios";

const API = axios.create({
  baseURL: "https://luxeora-jyu8.onrender.com/api",
});

export default API;