# 📋 ListaDeTarefas - CRUD Full Stack

Projeto full stack de uma **Lista de Tarefas** com funcionalidades completas de **CRUD (Create, Read, Update, Delete)**. O sistema foi desenvolvido com **Angular** no front-end, **ASP.NET Core (C#)** no back-end, e **Oracle SQL** como banco de dados.

## 🔧 Tecnologias Utilizadas

### Front-end:
- [Angular](https://angular.io/) (versão 19.2.0)
- HTML, CSS, TypeScript

### Back-end:
- [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) (versão 9.0)
- C#

### Banco de Dados:
- Oracle SQL

## ✅ Funcionalidades

- ✔️ Adicionar nova tarefa
- ✔️ Listar todas as tarefas
- ✔️ Atualizar tarefa existente
- ✔️ Marcar tarefa como concluída
- ✔️ Remover tarefa
- ✔️ Validações de formulário
- ✔️ Conexão com banco de dados Oracle via API

## 🧠 Conceitos aplicados

- Componentização no Angular
- Injeção de dependência
- Consumo de API REST
- Serviços HTTP
- Entity Framework Core (para Oracle)
- Boas práticas de organização de código

## 🖼️ Preview

> *(Adicione aqui prints ou um gif mostrando o funcionamento do app)*

## 🚀 Como executar o projeto

### Requisitos:
- Node.js
- Angular CLI
- .NET SDK
- Oracle Database ou Oracle XE
- Ferramenta para conexão com o Oracle (SQL Developer, DBeaver etc.)

### Passos:

#### 1. Clone o repositório:
git clone https://github.com/seu-usuario/nome-do-repo.git

#### 2. Frontend:
cd frontend
npm install
ng serve

#### 3. Backend:
cd backend
dotnet restore
dotnet run

#### 4. Banco de dados:
Execute os scripts SQL da pasta /database para criar as tabelas e dados iniciais no Oracle.


#### Organização
📦 projeto-tarefas
├── frontend/ (Angular)
├── backend/ (ASP.NET Core)
└── database/ (scripts SQL)


📌 Observações

    Certifique-se de atualizar a string de conexão com o banco Oracle no arquivo appsettings.json do projeto back-end.

    As requisições entre front-end e back-end estão configuradas para funcionar localmente via CORS.

🧑‍💻 Autor

Desenvolvido por Vinicius Miguel Castro
Se quiser trocar uma ideia ou tirar dúvidas, me chama! 😄