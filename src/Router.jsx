import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ConfiguracoesPage from "./pages/ConfigPage";
import AnalisePage from "./pages/AnalisePage";
import AvaliacaoDetalhes from "./pages/AvaliacaoDetalhes";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated() === null) {
    // Ainda carregando a validação do token
    return <Navigate to="/login" />;
  }

  return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Redirecionamento da raiz baseado em autenticação */}
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <Navigate to="/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Rotas públicas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />

      {/* Rotas privadas */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/analise"
        element={
          <PrivateRoute>
            <AnalisePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/configuracoes"
        element={
          <PrivateRoute>
            <ConfiguracoesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/avaliacoes/:id"
        element={
          <PrivateRoute>
            <AvaliacaoDetalhes />
          </PrivateRoute>
        }
      />

      {/* Fallback: rota não mapeada */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
