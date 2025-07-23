import Sidebar from '../components/sideBar';
import '../styles/dashboardPage.css';

export default function DashboardPage() {
  const avaliacoes = [
    {
      id: 1,
      portal: 'www.trizideladovale.ma.gov.br/acessoainformacao.php',
      data: '2024-07-26',
      criterios: '28/28'
    },
    {
      id: 2,
      portal: 'transparency.county.gov',
      data: '2024-07-20',
      criterios: '25/28'
    },
    {
      id: 3,
      portal: 'transparency.state.gov',
      data: '2024-07-15',
      criterios: '28/28'
    },
    {
      id: 4,
      portal: 'transparency.school.edu',
      data: '2024-07-10',
      criterios: '17/28'
    },
    {
      id: 5,
      portal: 'transparency.library.org',
      data: '2024-07-05',
      criterios: '04/28'
    }
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p className="welcome-message">Bem vindo novamente, Usuario. Veja abaixo as suas avaliações recentes</p>

        <div className="btn-wrapper">
          <button className="nova-avaliacao-btn">Começar nova avaliação</button>
        </div>

        <h2>Avaliações Recentes</h2>

        <table className="avaliacoes-table">
          <thead>
            <tr>
              <th>Portal URL</th>
              <th>Data da avaliação</th>
              <th>Critérios atendidos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {avaliacoes.map((av) => (
              <tr key={av.id}>
                <td>{av.portal}</td>
                <td>{av.data}</td>
                <td>{av.criterios}</td>
                <td><a href="#" className="view-link">Ver avaliação</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}