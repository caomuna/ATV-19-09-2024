# Projeto de Autenticação com JWT

Este projeto implementa um sistema de autenticação de usuário com JSON Web Token (JWT) utilizando Node.js no backend e uma interface frontend em HTML e JavaScript.

## Funcionalidades

- **Login com JWT:** O usuário faz login utilizando um formulário no `index.html`. Após login bem-sucedido, o sistema armazena o token JWT e redireciona para `registrar.html`.
- **Validação de Token:** A página `registrar.html` verifica se o usuário possui um token JWT válido antes de carregar os dados.
- **Logout:** O usuário pode fazer logout, o que remove o token armazenado e redireciona para a página de login.

## Pré-requisitos

- [Node.js](https://nodejs.org) (versão 12 ou superior)
- [npm](https://www.npmjs.com/)

## Estrutura do Projeto

````
projeto/ ├── public/ │ ├── index.html
│ ├── registrar.html
│ ├── main.js
│ ├── main.css
├── server.js
├── package.json
└── README.md
````

## Passo a Passo para Configuração

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
Instale as dependências:

````bash
npm install
````
Configuração do Banco de Dados:

Crie um arquivo .env com o conteúdo abaixo:


````env
Copiar código
DATABASE_URL="sua-url-de-banco-de-dados"
JWT_SECRET="sua-chave-secreta-para-jwt"
Inicie o servidor:
````
````bash
node server.js
env
DATABASE_URL="sua-url-de-banco-de-dados"
JWT_SECRET="sua-chave-secreta-para-jwt"
````
Inicie o servidor:

````bash
node server.js
````
Acesse o sistema:

Abra seu navegador e vá para http://localhost:3000/index.html.

Testando a Funcionalidade de Login
Acessar a Página de Login:

Abra http://localhost:3000/index.html.
Insira o username e password de um usuário válido.
Verificar Redirecionamento para registrar.html:

Após o login, o sistema deve redirecionar para registrar.html.
Verificação de Token na Página de Registro:

Se o token estiver ausente ou inválido, o sistema exibe uma mensagem de erro e redireciona para index.html.
Logout:

Na página registrar.html, clique no botão de logout para encerrar a sessão.
Tecnologias Utilizadas

Node.js e Express
jsonwebtoken
HTML, CSS e JavaScript
Copiar código
