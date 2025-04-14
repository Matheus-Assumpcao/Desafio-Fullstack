# 🛍️ Frontend - Sistema de Login e Catálogo de Produtos

Este é o frontend da aplicação de gerenciamento de produtos, que consome uma API REST para autenticação e exibição de produtos. Desenvolvido com **React**, utiliza **Context API**, **React Router** e **Toastify** para fornecer uma experiência moderna e responsiva.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [JWT Decode](https://www.npmjs.com/package/jwt-decode)
- Styled Components

---

## 📦 Instalação

### Clone o repositório:
git clone https://github.com/Matheus-Assumpcao/gf-frontend.git
Acesse a pasta do projeto:
cd gf-frontend

### Instale as dependências:
npm install

### Inicie o servidor:
npm run dev

--- 

## 🔐 Autenticação
O sistema utiliza JWT para autenticação de usuários. Ao fazer login, o token é salvo no localStorage e o usuário é decodificado para verificar o nível de acesso (admin ou cliente).

---

## 🧑‍💼 Perfis de Usuário

| Perfil   | Permissões                                                                 |
|----------|----------------------------------------------------------------------------|
| **Admin**   | Pode criar, editar, excluir e visualizar produtos. Acessa todos os usuários. |
| **Cliente** | Pode apenas visualizar os produtos cadastrados.                         |

## 🛣️ Rotas do Frontend

| Caminho        | Componente | Acesso     | Descrição                               |
|----------------|------------|------------|-----------------------------------------|
| `/`            | Login      | Público    | Tela de login com e-mail e senha       |
| `/products`    | Produtos   | Autenticado | Lista de produtos, com gerenciamento para admins |

---

## 📁 Estrutura de Pastas
src/
│
├── components/         # Componentes reutilizáveis (Header, Modal)
├── context/            # AuthContext com JWT
├── pages/              # Páginas da aplicação (Login, Products)
├── services/           # Configuração do axios
├── styles/             # Styled Components separados por página
└── App.tsx             # Definição das rotas

---

## 💬 Notificações
Utiliza react-toastify para feedback ao usuário:

✅ Login realizado com sucesso
❌ Erro ao realizar login
⚠️ Erros ao buscar dados da API

---

## 🔐 Proteção de Rotas
As páginas protegidas (como /products) verificam se o token JWT está presente e se o usuário está autenticado via Context.