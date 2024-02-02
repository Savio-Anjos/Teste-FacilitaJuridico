<p align='center'><h1>Teste Facilita Jurídico</h1></p>

 <p align='center'>

<img src="https://img.shields.io/github/repo-size/Savio-Anjos/Teste-FacilitaJuridico?color=1890FF">
<img src="https://img.shields.io/github/languages/count/Savio-Anjos/Teste-FacilitaJuridico?color=1890FF">
<img src="https://img.shields.io/github/last-commit/Savio-Anjos/Teste-FacilitaJuridico?color=1890FF">  
</p>

## 🚀 Tecnologias

Este projeto está utilizando as seguintes tecnologias:

- [Node](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Vitest](https://vitest.dev/)
- [Docker](https://www.docker.com/)
- [Prisma](https://www.prisma.io/)
- [React](https://react.dev/)
- [Next](https://nextjs.org/)

## 📜 Descrição

Este projeto tem o intuito de melhorar o trabalho de uma empresa facilitando
na administração dos cliente. Nele, é possivel cadastrar, listar e filtrar os clientes.
Ao fazer o cadastro o usuário fornece a latitude e longitude que são usados para
calcular a distância entre a empresa e o cliente e listar com base nos clientes mais próximos.
Foi seguido o padrão de Arquitetura Repository Pattern e para garantir a qualidade foram
desenvolvido testes unitários e E2E.

## ⚙️ Como funciona?

## RFs (Requisitos funcionais)

- [x] É possível listar os clientes.
- [x] É possível filtrar com base nas informações cadastradas.
- [x] É possível cadastrar novos clientes.
- [x] É possível buscar por clientes próximo com base na latitude e longitude.

## Rotas da aplicação

A seguir estão as principais rotas da aplicação:

### Clientes

Aqui estão as rotas relacionadas aos clientes:

- **POST** `/customers`: Cria um novo cliente.
- **GET** `/customers`: Lista todos os clientes.
- **GET** `/customers/filter/name/:name`: Filtra clientes por nome.
- **GET** `/customers/filter/email/:email`: Filtra clientes por e-mail.
- **GET** `/customers/filter/telephone/:telephone`: Filtra clientes por telefone.
- **GET** `/customers/distance`: Lista todos os clientes por distância.

## 🎲 Quer customizar o projeto?

### Caso não tenha instale o - [Docker](https://www.docker.com/)

### Clone esse repositório

```bash
git clone https://github.com/Savio-Anjos/Teste-FacilitaJuridico.git
```

### Navegue até o diretório do projeto

```bash
cd Teste-FacilitaJuridico
```

### Navegue até o diretório do back-end

```bash
cd back-end
```

### Instale as dependências

```bash
npm i
```

```bash
yarn
```

### Execute o docker compose

```bash
docker compose up
```

### Execute o docker

```bash
docker start
```

### Rode as migrations

```bash
npx prisma migrate dev
```

### Inicie a aplicação back-end

```bash
npm run start:dev
```

### Navegue até o diretório do front-end

```bash
cd front-end
```

### Inicie a aplicação front-end

```bash
npm run dev
```

---

<p>Criado com 💙 por <a href='https://github.com/Savio-Anjos/' target='_blank'>Sávio Anjos</a></p>
