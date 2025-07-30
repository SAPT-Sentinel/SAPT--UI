import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/sidebar.css';

export default function Sidebar() {
  const [aberta, setAberta] = useState(true);

  return (
    <div className={`sidebar ${aberta ? '' : 'fechada'}`}>
      <button className="toggle-btn" onClick={() => setAberta(!aberta)}>
        ☰
      </button>

      <div className="user-info">
        <div className="avatar" />
        {aberta && (
          <div className="user-text">
            <p className="name">Usuario</p>
            <p className="email">usuario@gmail.com</p>
          </div>
        )}
      </div>

      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-item">
          <i className="fi fi-sr-house-chimney icon"></i>
          {aberta && 'Dashboard'}
        </NavLink>
        <NavLink to="/analise" className="nav-item">
          <i className="fi fi-rr-square-plus icon"></i>
          {aberta && 'Nova Avaliação'}
        </NavLink>
        <NavLink to="/configuracoes" className="nav-item">
          <i className="fi fi-rs-settings icon"></i>
          {aberta && 'Configurações'}
        </NavLink>
        <NavLink to="/login" className="nav-item sair">
          <i className="fi fi-rr-exit icon"></i>
          {aberta && 'Sair'}
        </NavLink>
      </nav>
    </div>
  );
}
