import { useState, useEffect } from "react";
import axios from "axios";

export function useAuth() {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // Seta o token no axios ao iniciar (ex: após refresh)
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }
  }, []);

  // Atualiza token no localStorage e no axios quando mudar
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  return { token, setToken };
}
