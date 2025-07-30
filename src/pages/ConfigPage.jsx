import { useState } from 'react';
import Sidebar from '../components/sideBar';
import HeaderMobile from '../components/HeaderMobile';
/* import SidebarMobile from '../components/SidebarMobile'; */
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/configPage.css';

export default function ConfiguracoesPage() {
  const [email, setEmail] = useState('usuario@gmail.com');
  const [username, setUsername] = useState('Gabriel');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [saved, setSaved] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="config-page">
      {isMobile ? <HeaderMobile /> : <Sidebar />}
      <div className="config-content">
        {/* {isMobile && <HeaderMobile />} */}
        <header className="config-header">
          <h2>Configurações</h2>
          <small>Gerencie suas preferências e informações da conta</small>
        </header>

        <section className="config-section">
          <div className="profile-photo">
            <div className="avatar-config">
              <i className="fi fi-sr-user avatar-icon"></i>
              <button className="change-photo-btn">
                <i className="fi fi-rr-camera"></i> Alterar
              </button>
            </div>
            <div className="profile-info">
              <h3>{username}</h3>
              <p>{email}</p>
            </div>
          </div>
        </section>

        <section className="config-section">
          <h4>
            <i className="fi fi-sr-user section-icon"></i>
            Detalhes da Conta
          </h4>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Nome de Usuário</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? <><i className="fi fi-rr-check"></i> Salvo!</> : 'Salvar alterações'}
          </button>
        </section>

        <section className="config-section">
          <h4>
            <i className="fi fi-sr-lock section-icon"></i>
            Segurança
          </h4>
          <div className="input-group">
            <label>Senha atual</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Nova senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Confirmar nova senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="save-btn">
            Atualizar senha
          </button>
        </section>
      </div>
    </div>
  );
}
