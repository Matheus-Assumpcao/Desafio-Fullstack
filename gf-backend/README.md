# 🛠️ Backend - API de Gerenciamento de Produtos e Usuários

Este é o backend da aplicação do desafio técnico fullstack da GF Software que realiza o gerenciamento de **usuários e produtos**, com autenticação via **JWT** e controle de acesso baseado em roles (`admin` e `cliente`).

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Token)](https://jwt.io/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Cors](https://github.com/expressjs/cors)

---

## 📁 Estrutura de Pastas

├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── config
│   └── index.ts
├── .env
├── package.json
└── tsconfig.json

---

## ⚙️ Configuração Inicial

### Clone o repositório:
git clone https://github.com/Matheus-Assumpcao/gf-backend.git
cd gf-backend

### Instale as dependências:
npm install

### Inicie o servidor:
npm run dev

## ⚠️ Observação
#### *Eu optei por deixar .env disponivel por questão de praticidade do teste do código*

---

## 🔐 Autenticação e Autorização
JWT é utilizado para autenticação.
Middleware authMiddleware protege rotas com base no token e na role do usuário (admin ou cliente).

---

## 🔄 Endpoints da API

### 🧑‍💼 Usuários
| Método | Rota                   | Acesso  | Descrição                    |
|--------|------------------------|---------|------------------------------|
| POST   | `/api/usuarios/register` | Público | Cadastro de usuário          |
| POST   | `/api/usuarios/login`    | Público | Login e geração de token     |
| GET    | `/api/usuarios/`         | Admin   | Listar todos os usuários     |
| GET    | `/api/usuarios/:id`      | Admin   | Obter detalhes de um usuário |

### 📦 Produtos
| Método | Rota                     | Acesso      | Descrição               |
|--------|--------------------------|-------------|--------------------------|
| GET    | `/api/produtos/`         | Autenticado | Listar produtos          |
| POST   | `/api/produtos/`         | Admin       | Criar novo produto       |
| PUT    | `/api/produtos/:id`      | Admin       | Atualizar produto        |
| PATCH  | `/api/produtos/:id`      | Admin       | Atualizar parcialmente   |
| DELETE | `/api/produtos/:id`      | Admin       | Remover produto          |

### 🔐 Permissões por Tipo de Usuário

| Tipo de Usuário | Permissões                                                                 |
|------------------|---------------------------------------------------------------------------|
| Admin            | Pode criar, editar, excluir e visualizar produtos. <br> Pode acessar os dados de todos os usuários. |
| Cliente          | Pode apenas visualizar produtos.                                           |

---

