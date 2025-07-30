import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/dashboardPage';
import ConfiguracoesPage from './pages/configPage';
import AnalisePage from './pages/AnalisePage';
import AvaliacaoDetalhes from './pages/AvaliacaoDetalhes';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/analise" element={<AnalisePage />} />
      <Route path="/configuracoes" element={<ConfiguracoesPage />} />
      <Route path="/avaliacoes/:id" element={<AvaliacaoDetalhes />} />
    </Routes>
  );
}
