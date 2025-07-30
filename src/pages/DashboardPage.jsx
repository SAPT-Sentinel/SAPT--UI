import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sideBar";
import HeaderMobile from "../components/HeaderMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { getAnalises } from "../services/analiseService";
import "../styles/dashboardPage.css";

export default function DashboardPage() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAnalises();
        setAvaliacoes(data);
      } catch (error) {
        console.error("Erro ao buscar análises:", error);
      }
    }
    fetchData();
  }, []);

  const contarCriterios = (resultados = []) => {
    const total = resultados.length;
    const atendidos = resultados.filter((r) => r.passou).length;
    return `${atendidos}/${total}`;
  };

  return (
    <div className="dashboard">
      {isMobile ? <HeaderMobile /> : <Sidebar />}
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p className="welcome-message">
          Bem vindo novamente, {isMobile ? "Gabriel" : "Usuário"}. Veja abaixo
          as suas avaliações recentes
        </p>

        <div className="btn-wrapper">
          <button
            className="nova-avaliacao-btn"
            onClick={() => navigate("/nova-avaliacao")}
          >
            Começar nova avaliação
          </button>
        </div>

        <h2>Avaliações Recentes</h2>

        <table className="avaliacoes-table">
          <thead>
            <tr>
              <th>Portal URL</th>
              {!isMobile && <th>Data da avaliação</th>}
              <th>Critérios atendidos</th>
              {!isMobile && <th>Ações</th>}
            </tr>
          </thead>
          <tbody>
            {avaliacoes.map((av) => (
              <tr key={av.id}>
                <td>
                  <a
                    href={av.url_avaliada}
                    className="portal-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {av.url_avaliada.replace(/^https?:\/\//, "")}
                  </a>
                </td>
                {!isMobile && (
                  <td>{new Date(av.data_analise).toLocaleDateString()}</td>
                )}
                <td>{contarCriterios(av.resultados)}</td>
                {!isMobile && (
                  <td>
                    <button
                      className="view-link"
                      onClick={() => navigate(`/avaliacoes/${av.id}`)}
                    >
                      Ver avaliação
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
