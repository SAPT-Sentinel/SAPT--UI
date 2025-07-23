import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [capsLockAtivo, setCapsLockAtivo] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'teste@teste.com' && senha === '123') {
      alert('Login válido');
      setErro('');
      navigate('/dashboard');//ir para a tela principal
    } else {
      setErro('informações incorretas');
    }
  };

  const verificarCapsLock = (e) => {
    setCapsLockAtivo(e.getModifierState && e.getModifierState('CapsLock'));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>SAPT</h1>

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="senha-label-container">
          <label htmlFor="senha" className={erro ? 'erro-label' : ''}>
            Senha:
          </label>
          {capsLockAtivo && (
            <span className="capslock-alert">capslock ativada</span>
          )}
        </div>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          onKeyUp={verificarCapsLock}
          className={erro ? 'input-erro' : ''}
        />

        {erro && <p className="erro-msg">{erro}</p>}

        <button onClick={handleLogin}>Entrar</button>

        <p className="link-registro">
          Ainda não tem Login? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
