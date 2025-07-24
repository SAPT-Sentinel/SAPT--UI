import { useForm } from "react-hook-form";
import "../styles/RegisterPage.css";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const senha = watch("senha");
  const confirmar = watch("confirmar");

  const onSubmit = () => {
    if (senha !== confirmar) {
      setError("confirmar", {
        type: "manual",
        message: "As senhas não coincidem",
      });
      return;
    }

    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>SAPT - Cadastro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="usuario">Usuário:</label>
          <input
            id="usuario"
            type="text"
            {...register("usuario", { required: "Usuário é obrigatório" })}
            className={errors.usuario ? "error-input" : ""}
          />
          {errors.usuario && <p className="error">{errors.usuario.message}</p>}

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            {...register("senha", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
            className={errors.senha ? "error-input" : ""}
          />
          {errors.senha && <p className="error">{errors.senha.message}</p>}

          <label htmlFor="confirmar">Confirmar senha:</label>
          <input
            id="confirmar"
            type="password"
            {...register("confirmar", {
              required: "Confirmação de senha é obrigatória",
            })}
            className={errors.confirmar ? "error-input" : ""}
          />
          {errors.confirmar && (
            <p className="error">{errors.confirmar.message}</p>
          )}

          <button type="submit">Cadastrar</button>
        </form>

        <p className="register-footer">
          Já tem cadastro? <a href="/login">Fazer login</a>
        </p>
      </div>
    </div>
  );
}
