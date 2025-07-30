import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ConfiguracoesPage from "./pages/ConfigPage";
import AnalisePage from "./pages/AnalisePage";
import AvaliacaoDetalhes from "./pages/AvaliacaoDetalhes";

// Protege rotas privadas
function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated() === null) {
    // ainda carregando
    return null;
  }

  return isAuthenticated() ? children : <Navigate to="/login" />;
}

// Impede acesso às rotas públicas por usuários autenticados
function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated() === null) {
    // ainda carregando
    return null;
  }

  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
}

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Redirecionamento da raiz baseado na autenticação */}
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

      {/* Rotas públicas (bloqueadas se logado) */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/cadastro"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

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

      {/* Fallback para rota não mapeada */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
