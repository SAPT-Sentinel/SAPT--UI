import React, {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "../hooks/useRouter";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);
  const [username, setUsernameState] = useState(null);
  const [role, setRoleState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const setToken = useCallback((newToken) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("authToken", newToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, []);

  const setUsername = useCallback((newUsername) => {
    setUsernameState(newUsername);
    if (newUsername) {
      localStorage.setItem("authUsername", newUsername);
    } else {
      localStorage.removeItem("authUsername");
    }
  }, []);

  const setRole = useCallback((newRole) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem("authRole", newRole);
    } else {
      localStorage.removeItem("authRole");
    }
  }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedUsername = localStorage.getItem("authUsername");
    const savedRole = localStorage.getItem("authRole");

    if (savedToken) {
      setTokenState(savedToken);
      setUsernameState(savedUsername);
      setRoleState(savedRole);

      try {
        const decoded = jwtDecode(savedToken);
        const currentTime = Date.now() / 1000;

        if (decoded.exp <= currentTime) {
          setToken(null);
          setUsername(null);
          setRole(null);
          router.push("/");
        } else {
          const timeout = (decoded.exp - currentTime) * 1000;
          const timer = setTimeout(() => {
            setToken(null);
            setUsername(null);
            setRole(null);
            router.push("/");
          }, timeout);

          setIsLoading(false);
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        setToken(null);
        setUsername(null);
        setRole(null);
      }
    } else {
      setIsLoading(false);
    }

    return undefined;
  }, [setToken, setUsername, setRole, router]);

  const isAuthenticated = useCallback(() => {
    if (isLoading) return null;
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp > currentTime;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return false;
    }
  }, [token, isLoading]);

  const useLogout = useCallback(() => {
    setToken(null);
    setUsername(null);
    setRole(null);
    router.push("/");
  }, [setToken, setUsername, setRole, router]);

  const memorizedValue = useMemo(
    () => ({
      token,
      username,
      role,
      setToken,
      setUsername,
      setRole,
      isAuthenticated,
      useLogout,
    }),
    [
      token,
      username,
      role,
      setToken,
      setUsername,
      setRole,
      isAuthenticated,
      useLogout,
    ]
  );

  return (
    <AuthContext.Provider value={memorizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
