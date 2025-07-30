import { NavLink } from 'react-router-dom';
import '../styles/sidebarMobile.css';

export default function SidebarMobile({ onClose }) {
  return (
    <div className="sidebar-mobile-overlay">
      <div className="sidebar-mobile">
        <div className="header">
          <span className="logo-text">SAPT</span>
          <button className="close-btn" onClick={onClose}>
            <i className="fi fi-rr-cross"></i>
          </button>
        </div>

        <div className="user-info">
          <div className="avatar" />
          <div className="user-text">
            <p className="name">Gabriel Machado</p>
            <p className="email">gabriel@gmail.com</p>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/dashboard" className="nav-item" onClick={onClose}>
            <i className="fi fi-sr-house-chimney icon"></i> Dashboard
          </NavLink>
          <NavLink to="/analise" className="nav-item" onClick={onClose}>
            <i className="fi fi-rr-square-plus icon"></i> Nova Avaliação
          </NavLink>
          <NavLink to="/configuracoes" className="nav-item" onClick={onClose}>
            <i className="fi fi-rs-settings icon"></i> Configurações
          </NavLink>
          <NavLink to="/login" className="nav-item sair" onClick={onClose}>
            <i className="fi fi-rr-exit icon"></i> Sair
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
