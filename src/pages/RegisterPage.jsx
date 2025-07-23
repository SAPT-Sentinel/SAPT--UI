import { useState } from 'react';
import '../styles/RegisterPage.css';

export default function RegisterPage() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [erro, setErro] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!usuario || !email || !senha || !confirmar) {
      setErro('Todos os campos são obrigatórios');
      return;
    }

    if (senha !== confirmar) {
      setErro('As senhas não coincidem');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setErro('');
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>SAPT - Cadastro</h2>

        <form onSubmit={handleRegister}>
          <label htmlFor="usuario">Usuário:</label>
          <input
            id="usuario"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className={erro && !usuario ? 'error-input' : ''}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={erro && !email ? 'error-input' : ''}
          />

          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className={erro && (senha.length < 6 || !senha) ? 'error-input' : ''}
          />

          <label htmlFor="confirmar">Confirmar senha:</label>
          <input
            id="confirmar"
            type="password"
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            className={erro && (senha !== confirmar || !confirmar) ? 'error-input' : ''}
          />

          {erro && <p className="error">{erro}</p>}

          <button type="submit">Cadastrar</button>
        </form>

        <p className="register-footer">
          Já tem cadastro? <a href="/login">Fazer login</a>
        </p>
      </div>
    </div>
  );
}
