// src/services/authService.js
import api from "./api"; // Certifique-se que o caminho esteja correto

export async function login(username, password) {
  const response = await api.post(
    "/login",
    {
      username,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const token = response.data.access_token;

  // Salva no localStorage para que os interceptors usem automaticamente
  localStorage.setItem("token", token);

  return token;
}
