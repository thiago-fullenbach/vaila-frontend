# Vaila Frontend

## English

### Overview

This repository contains the frontend for the Vaila application, built with Angular 20.
It provides a UI to create, list, and delete shortened URLs.

The frontend expects a backend API to be available on port `3200`.

### Tech Stack

- Angular 20
- Angular Material
- Tailwind CSS 4
- Node.js 20+
- Docker + Nginx for containerized serving

### Prerequisites

Before running the project, make sure you have:

- Node.js `20` or newer
- npm
- Docker and Docker Compose, if you want to run the containerized version

### Install Dependencies

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm start
```

The app will be available at:

```text
http://localhost:4200
```

### Backend Requirement

During local development, Angular uses the proxy file [`src/proxy.conf.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/src/proxy.conf.json) to forward requests from `/api` to:

```text
http://localhost:3200
```

That means the backend must be running locally on port `3200`.

### Available Scripts

- `npm start`: starts the Angular development server
- `npm run build`: creates a production build
- `npm run watch`: builds in development mode with watch enabled
- `npm test`: runs unit tests with Karma

### Production Build

To generate the production build:

```bash
npm run build
```

### Run with Docker

Build and start the container:

```bash
docker compose up --build
```

The container serves the app at:

```text
http://localhost:4200
```

Inside Docker, Nginx also forwards `/api` requests to:

```text
http://host.docker.internal:3200
```

So the backend must still be available on port `3200` on the host machine.

### Project Structure

- [`package.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/package.json): project scripts and dependencies
- [`angular.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/angular.json): Angular build and serve configuration
- [`Dockerfile`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/Dockerfile): container build
- [`docker-compose.yaml`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/docker-compose.yaml): local container orchestration
- [`nginx.conf`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/nginx.conf): Nginx SPA and API proxy configuration

---

## Portugues (Brasil)

### Visao Geral

Este repositorio contem o frontend da aplicacao Vaila, construido com Angular 20.
Ele oferece uma interface para criar, listar e remover URLs encurtadas.

O frontend espera que a API backend esteja disponivel na porta `3200`.

### Tecnologias

- Angular 20
- Angular Material
- Tailwind CSS 4
- Node.js 20+
- Docker + Nginx para execucao em container

### Pre-requisitos

Antes de executar o projeto, garanta que voce tenha:

- Node.js `20` ou superior
- npm
- Docker e Docker Compose, caso queira executar a versao em container

### Instalar Dependencias

```bash
npm install
```

### Executar Localmente

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicacao ficara disponivel em:

```text
http://localhost:4200
```

### Requisito do Backend

Durante o desenvolvimento local, o Angular usa o arquivo [`src/proxy.conf.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/src/proxy.conf.json) para encaminhar requisicoes de `/api` para:

```text
http://localhost:3200
```

Isso significa que o backend precisa estar em execucao localmente na porta `3200`.

### Scripts Disponiveis

- `npm start`: inicia o servidor de desenvolvimento do Angular
- `npm run build`: gera o build de producao
- `npm run watch`: gera o build em modo de desenvolvimento com watch
- `npm test`: executa os testes unitarios com Karma

### Build de Producao

Para gerar o build de producao:

```bash
npm run build
```

### Executar com Docker

Para construir e iniciar o container:

```bash
docker compose up --build
```

O container publica a aplicacao em:

```text
http://localhost:4200
```

Dentro do Docker, o Nginx tambem encaminha as requisicoes `/api` para:

```text
http://host.docker.internal:3200
```

Portanto, o backend tambem precisa estar disponivel na porta `3200` na maquina host.

### Estrutura do Projeto

- [`package.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/package.json): scripts e dependencias do projeto
- [`angular.json`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/angular.json): configuracao de build e execucao do Angular
- [`Dockerfile`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/Dockerfile): build do container
- [`docker-compose.yaml`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/docker-compose.yaml): orquestracao local com container
- [`nginx.conf`](/D:/Estudos_Programacao/vaila/Frontend/vaila-frontend/nginx.conf): configuracao do Nginx para SPA e proxy da API
