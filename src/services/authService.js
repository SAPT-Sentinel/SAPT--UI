// src/services/authService.js
import axios from 'axios';

export async function login(username, password) {
  const res = await axios.post("http://localhost:8000/token", {
    username,
    password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  const token = res.data.access_token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return token;
}
