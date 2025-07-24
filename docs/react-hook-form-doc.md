
# Documentação: Uso de React Hook Form no Projeto SAPT

## 📦 O que é React Hook Form?

[React Hook Form](https://react-hook-form.com/) é uma biblioteca para gerenciamento de formulários em aplicações React. Ela permite:

- Criar formulários de forma simples e eficiente
- Melhor performance (sem re-renderizações desnecessárias)
- Integração com validação, como regras personalizadas ou validação via Yup
- Fácil manipulação de erros, envio e estados dos campos

---

## ✅ Por que usar o React Hook Form?

- **Performance**: apenas os inputs afetados são renderizados novamente.
- **Facilidade**: a API é simples e baseada em hooks.
- **Validação integrada**: você pode configurar validações direto nos campos.
- **Menor código**: menos uso de `useState` e `onChange`.

---

## 🔧 Hooks e métodos utilizados

No projeto, utilizamos os seguintes métodos da lib:

### `useForm()`

Hook principal para inicializar o formulário. Retorna um objeto com várias funções úteis.

```js
const {
  register,
  handleSubmit,
  setError,
  formState: { errors },
  watch
} = useForm();
```

#### ✏️ `register()`

Registra os inputs no formulário e adiciona regras de validação:

```js
<input {...register("email", { required: "Email é obrigatório" })} />
```

#### 🧠 `handleSubmit()`

Função que lida com o envio do formulário. Você passa uma função `onSubmit`.

```js
<form onSubmit={handleSubmit(onSubmit)}>
```

#### ❗ `setError()`

Permite definir erros manualmente (ex: erro de autenticação):

```js
setError("senha", {
  type: "manual",
  message: "informações incorretas",
});
```

#### ⚠️ `formState.errors`

Contém todos os erros do formulário:

```js
{errors.email && <p>{errors.email.message}</p>}
```

#### 👁️ `watch()`

Permite observar valores dos campos em tempo real (usado para comparar senhas):

```js
const senha = watch("senha");
const confirmar = watch("confirmar");
```

---

## 🧪 Exemplos práticos

### 🟢 LoginPage.jsx

- Valida email e senha obrigatórios
- Verifica `CapsLock` ativo
- Exibe erro manual se o login for inválido

```js
<input
  type="email"
  {...register("email", { required: "Email é obrigatório" })}
/>
<input
  type="password"
  {...register("senha", { required: "Senha é obrigatória" })}
/>
```

```js
if (email === "teste@teste.com" && senha === "123") {
  navigate("/dashboard");
} else {
  setError("senha", { type: "manual", message: "informações incorretas" });
}
```

---

### 🟢 RegisterPage.jsx

- Valida campos obrigatórios
- Valida senha mínima de 6 caracteres
- Verifica se as senhas coincidem com `watch` + `setError`

```js
<input
  type="password"
  {...register("senha", {
    required: "Senha é obrigatória",
    minLength: {
      value: 6,
      message: "A senha deve ter pelo menos 6 caracteres",
    },
  })}
/>

<input
  type="password"
  {...register("confirmar", {
    required: "Confirmação de senha é obrigatória",
  })}
/>
```

```js
if (senha !== confirmar) {
  setError("confirmar", {
    type: "manual",
    message: "As senhas não coincidem",
  });
}
```

---

## 📚 Conclusão

O `react-hook-form` é uma biblioteca extremamente poderosa, leve e fácil de usar. Ela melhora a experiência do usuário e reduz a complexidade do código, especialmente em formulários com múltiplas validações como os que usamos no SAPT.

Para mais informações, acesse a [documentação oficial](https://react-hook-form.com/).
