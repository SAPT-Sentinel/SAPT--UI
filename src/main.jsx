import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import SnackBarComponent from "./components/SnackBar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx"; // Certifique-se de que o caminho está correto
import { BrowserRouter } from "react-router-dom"; // ✅ Importar o Router

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotificationProvider>
          <App />
          <SnackBarComponent />
        </NotificationProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
