import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/sidebar.css";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [aberta, setAberta] = useState(true);
  const { username, useLogout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // evita navegação automática do <NavLink>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLogout();
  };

  return (
    <div className={`sidebar ${aberta ? "" : "fechada"}`}>
      <button
        className="toggle-btn"
        onClick={() => setAberta(!aberta)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className="user-info">
        <div className="avatar" />
        {aberta && (
          <div className="user-text">
            <p className="name">{username || "Usuário"}</p>
            <p className="email">usuario@gmail.com</p>{" "}
            {/* pode ser dinâmico se desejar */}
          </div>
        )}
      </div>

      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-item">
          <i className="fi fi-sr-house-chimney icon"></i>
          {aberta && "Dashboard"}
        </NavLink>
        <NavLink to="/analise" className="nav-item">
          <i className="fi fi-rr-square-plus icon"></i>
          {aberta && "Nova Avaliação"}
        </NavLink>
        <NavLink to="/configuracoes" className="nav-item">
          <i className="fi fi-rs-settings icon"></i>
          {aberta && "Configurações"}
        </NavLink>
        <a href="#" onClick={handleLogout} className="nav-item sair">
          <i className="fi fi-rr-exit icon"></i>
          {aberta && "Sair"}
        </a>
      </nav>
    </div>
  );
}
