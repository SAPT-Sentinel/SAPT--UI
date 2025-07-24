import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/loginPage.css";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [capsLockAtivo, setCapsLockAtivo] = useState(false);
  const navigate = useNavigate();

  const onSubmit = ({ email, senha }) => {
    if (email === "teste@teste.com" && senha.toString() === "123") {
      alert("Login válido");
      navigate("/dashboard"); // ir para a tela principal
    } else {
      setError("senha", {
        type: "manual",
        message: "informações incorretas",
      });
    }
  };

  const verificarCapsLock = (e) => {
    setCapsLockAtivo(e.getModifierState && e.getModifierState("CapsLock"));
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>SAPT</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
          />
          {errors.email && <p className="erro-msg">{errors.email.message}</p>}

          <div className="senha-label-container">
            <label htmlFor="senha" className={errors.senha ? "erro-label" : ""}>
              Senha:
            </label>
            {capsLockAtivo && (
              <span className="capslock-alert">capslock ativada</span>
            )}
          </div>
          <input
            id="senha"
            type="password"
            {...register("senha", { required: "Senha é obrigatória" })}
            onKeyUp={verificarCapsLock}
            className={errors.senha ? "input-erro" : ""}
          />
          {errors.senha && <p className="erro-msg">{errors.senha.message}</p>}

          <button type="submit">Entrar</button>
        </form>

        <p className="link-registro">
          Ainda não tem Login? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
