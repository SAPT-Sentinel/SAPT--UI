// src/services/authService.js
import axios from "axios";

export async function login(username, password) {
  const response = await axios.post("https://sapt-api.onrender.com/login", {
    username,
    password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  const token = response.data.access_token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return token;
}
