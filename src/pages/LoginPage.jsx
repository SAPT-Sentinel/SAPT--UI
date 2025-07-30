import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../services/authService";
import { useNotification } from "../context/NotificationContext";
import CircularProgress from "@mui/material/CircularProgress"; // <- novo import
import "../styles/loginPage.css";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [capsLockAtivo, setCapsLockAtivo] = useState(false);
  const [loading, setLoading] = useState(false); // <- novo estado
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const onSubmit = async ({ username, password }) => {
    setLoading(true); // inicia o loading
    try {
      await login(username, password);
      addNotification("Login realizado com sucesso!", "success");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      addNotification("Usuário ou senha inválidos", "error");

      setError("password", {
        type: "manual",
        message: "Informações incorretas",
      });
    } finally {
      setLoading(false); // encerra o loading
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
          <label htmlFor="username">Usuário:</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Usuário é obrigatório" })}
          />
          {errors.username && (
            <p className="erro-msg">{errors.username.message}</p>
          )}

          <div className="senha-label-container">
            <label
              htmlFor="password"
              className={errors.password ? "erro-label" : ""}
            >
              Senha:
            </label>
            {capsLockAtivo && (
              <span className="capslock-alert">capslock ativada</span>
            )}
          </div>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
            onKeyUp={verificarCapsLock}
            className={errors.password ? "input-erro" : ""}
          />
          {errors.password && (
            <p className="erro-msg">{errors.password.message}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? (
              <CircularProgress size={22} style={{ color: "white" }} />
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        <p className="link-registro">
          Ainda não tem Login? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
