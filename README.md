
# SAPT Web – Interface de Análise de Transparência

Este projeto é o frontend web do sistema **SAPT** (Sistema Automatizado de Pontuação de Transparência), que permite visualizar, executar e gerenciar análises de transparência pública com base nos critérios definidos na Cartilha PNTP e na Lei de Acesso à Informação (LAI).

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) (opcional, mas recomendado)
- [Axios](https://axios-http.com/) – Requisições HTTP
- [React Router](https://reactrouter.com/) – Rotas SPA
- [TailwindCSS](https://tailwindcss.com/) – Estilização (opcional)
- [JWT Auth](https://jwt.io/) – Autenticação baseada em token

---

## 🧩 Funcionalidades do Frontend

- ✅ Login com autenticação JWT
- 👤 Cadastro e gerenciamento de usuários
- 🔍 Submissão de uma URL pública para análise
- 📊 Visualização do histórico de análises por usuário
- 📋 Exibição dos critérios avaliados com justificativas
- ✏️ Edição de análises e critérios (para usuários autorizados)
- 🗑️ Exclusão de análises

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sapt-web.git
cd sapt-web
```

### 2. Instalar as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configurar o ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_API_URL=http://127.0.0.1:8000
```

A URL deve apontar para a instância onde o backend da API SAPT está rodando.

---

### 4. Rodar a aplicação

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em:

👉 http://localhost:5173

---

## 🔐 Fluxo de Autenticação

- O login é feito via `POST /token` da API.
- O token JWT retornado é salvo no `localStorage` ou `sessionStorage`.
- As requisições protegidas incluem o header:

```http
Authorization: Bearer <token>
```

---

## 🗂️ Estrutura Sugerida

```
src/
├── components/
├── pages/
├── services/
│   └── api.ts         # Axios com baseURL e interceptors
├── contexts/
├── hooks/
├── routes/
├── App.tsx
└── main.tsx
```

---

## 🧪 Integração com API

Principais endpoints usados pelo frontend:

| Método | Endpoint               | Descrição                            |
|--------|------------------------|--------------------------------------|
| POST   | `/token`               | Login e geração de JWT               |
| POST   | `/users/`              | Criação de novo usuário              |
| POST   | `/api/analise`         | Executa análise de uma URL           |
| GET    | `/api/analises/`       | Lista histórico de análises          |
| GET    | `/api/analises/{id}`   | Detalhes de uma análise específica   |
| PUT    | `/api/analises/{id}`   | Edita a URL de uma análise           |
| PUT    | `/api/resultados/{id}` | Edita um resultado individual        |
| DELETE | `/api/analises/{id}`   | Apaga uma análise e seus resultados  |

---

## 📚 Requisitos e Regras de Negócio

Todos os critérios avaliados seguem a metodologia estabelecida na [Cartilha PNTP 2025](https://radardatransparencia.atricon.org.br/pdf/Cartilha-PNTP-2025.pdf), com suporte a:

- Verificações de estrutura organizacional, responsáveis, contatos, competências
- Resultados automáticos via scraping com BeautifulSoup
- Justificativas textuais por critério
- Classificação por domínio temático

---

## 👥 Equipe e Colaboração

Se deseja contribuir, abra um *issue* ou envie um *pull request* com sugestões de melhorias ou correções.

---

## 📄 Licença

Este projeto está licenciado sob os termos da **MIT License**.
