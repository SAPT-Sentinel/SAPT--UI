import { useState } from 'react';
import SidebarMobile from './SidebarMobile';
import '../styles/headerMobile.css';

export default function HeaderMobile() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="header-mobile">
        <button className="menu-btn" onClick={() => setMenuAberto(true)}>
          <i className="fi fi-rr-menu-burger"></i>
        </button>
        <span className="logo-text">SAPT</span>
      </header>

      {menuAberto && <SidebarMobile onClose={() => setMenuAberto(false)} />}
    </>
  );
}
