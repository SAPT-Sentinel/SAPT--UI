import { useState, useEffect } from 'react';

export function useAuth() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
  }, [token]);

  return { token, setToken };
}
