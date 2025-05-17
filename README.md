# 💰 API Calculadora de Juros Simples e Compostos

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-FE0101?style=for-the-badge&logo=cors&logoColor=white)

Uma API simples e bem estruturada em TypeScript utilizando Express para calcular juros simples e compostos. Este projeto serve como um exemplo prático de organização de código com separação de responsabilidades (inspirado em princípios como MVC/Clean Architecture), tipagem forte e boas práticas de desenvolvimento web.

## ✨ Funcionalidades

* Calcula juros simples com base no capital, taxa e tempo.
* Calcula juros compostos com base no capital, taxa, tempo e frequência de capitalização (opcional, padrão anual).
* API RESTful com endpoints dedicados para cada tipo de cálculo.
* Estrutura de projeto clara e organizada (controllers, services, routes, interfaces).
* Tipagem forte com TypeScript para maior segurança e manutenibilidade.
* Tratamento básico de erros e validação de entrada.

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** TypeScript
* **Runtime:** Node.js
* **Framework Web:** Express
* **Middleware:** Cors
* **Ferramentas de Desenvolvimento:** `ts-node-dev` para desenvolvimento com hot-reload

## 📂 Estrutura do Projeto

A estrutura de pastas foi pensada para promover a organização e a separação de responsabilidades:
src/
|-- controllers/       # Lógica de processamento de requisições HTTP e respostas
|   |-- interestController.ts
|-- services/          # Lógica de negócio pura (os cálculos de juros)
|   |-- simpleInterestService.ts
|   |-- compoundInterestService.ts
|-- routes/            # Definição das rotas da API
|   |-- interestRoutes.ts
|   |-- index.ts       # Agregador de rotas
|-- interfaces/        # Definição de tipos e contratos de dados
|   |-- IInterest.ts
|-- app.ts             # Configuração da aplicação Express (middlewares, rotas)
|-- server.ts          # Ponto de entrada que inicializa o servidor
|-- utils/             # Utilitários (ex: tratamento de erros, validação - opcionais)

## 🚀 Como Configurar e Executar

Siga os passos abaixo para colocar a API rodando na sua máquina:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados.

* [Node.js](https://nodejs.org/) (inclui npm)

### Instalação

1.  Clone este repositório:

    ```bash
    git clone <URL_DO_SEU_REPOSITÓRIO>
    cd calculadora-juros-api
    ```

2.  Instale as dependências do projeto:

    ```bash
    npm install
    # ou yarn install
    ```

### Executando a Aplicação

* **Modo Desenvolvimento (com hot-reload):**

    ```bash
    npm run dev
    # ou yarn dev
    ```
    A API iniciará e reiniciará automaticamente a cada alteração nos arquivos `.ts`.

* **Modo Produção (após build):**

    1.  Compile o código TypeScript para JavaScript:
        ```bash
        npm run build
        # ou yarn build
        ```
    2.  Inicie a aplicação compilada:
        ```bash
        npm start
        # ou yarn start
        ```

A API estará rodando em `http://localhost:3000` (ou na porta definida pela variável de ambiente `PORT`).

## 🎯 Endpoints da API

A API possui os seguintes endpoints sob o prefixo `/api/v1/interest`:

### 1. Calcular Juros Simples

* **URL:** `/api/v1/interest/simple`
* **Método:** `POST`
* **Descrição:** Calcula o juro simples e o montante final.
* **Corpo da Requisição (JSON):**

    ```json
    {
      "principal": 1000, // Capital Inicial (number, >= 0)
      "rate": 0.05,    // Taxa de juros por período (number, >= 0)
      "time": 2        // Número de períodos de tempo (number, >= 0)
    }
    ```

* **Exemplo de Resposta de Sucesso (JSON):**

    ```json
    {
        "interest": 100,
        "totalAmount": 1100,
        "calculationType": "simple",
        "parameters": {
            "principal": 1000,
            "rate": 0.05,
            "time": 2
        }
    }
    ```

### 2. Calcular Juros Compostos

* **URL:** `/api/v1/interest/compound`
* **Método:** `POST`
* **Descrição:** Calcula o juro composto e o montante final.
* **Corpo da Requisição (JSON):**

    ```json
    {
      "principal": 1000,           // Capital Inicial (number, >= 0)
      "rate": 0.05,              // Taxa de juros por período (number, >= 0)
      "time": 2,                 // Número de períodos de tempo (number, >= 0)
      "compoundingFrequency": 12 // Opcional: Frequência de capitalização por período (number, > 0, padrão: 1 - anual)
    }
    ```

* **Exemplo de Resposta de Sucesso (JSON):**

    ```json
    {
        "interest": 104.94130469549884,
        "totalAmount": 1104.9413046954988,
        "calculationType": "compound",
        "parameters": {
            "principal": 1000,
            "rate": 0.05,
            "time": 2,
            "compoundingFrequency": 12
        }
    }
    ```

### Respostas de Erro

Em caso de parâmetros inválidos ou erros internos, a API retornará:

* `400 Bad Request`: Quando os parâmetros de entrada não correspondem ao esperado ou são inválidos (ex: valores negativos onde não permitido). A resposta conterá uma mensagem de erro no corpo JSON.
    ```json
    {
      "error": "Parâmetros inválidos para cálculo de juros simples."
    }
    ```
* `500 Internal Server Error`: Em caso de erro inesperado no servidor. A resposta conterá uma mensagem genérica de erro (em produção, detalhes específicos do erro não devem ser expostos diretamente).
    ```json
    {
      "error": "Algo deu errado!"
    }
    ```

## ✨ Próximos Passos e Melhorias

Este projeto serve como ponto de partida. Possíveis melhorias incluem:

* **Validação de Entrada Robusta:** Utilizar bibliotecas como [Joi](https://joi.dev/)/[Yup](https://github.com/jquense/yup)/[Zod](https://zod.dev/) para validação completa e automática dos corpos de requisição.
* **Tratamento de Erros Avançado:** Criar um middleware de tratamento de erros mais sofisticado para diferentes tipos de exceções.
* **Logging:** Integrar uma biblioteca de logging (ex: [Winston](https://github.com/winstonjs/winston), [Pino](https://getpino.io/)) para registrar requisições, erros e eventos importantes.
* **Testes Unitários e de Integração:** Escrever testes automatizados para garantir a corretude dos cálculos (serviços) e o funcionamento dos endpoints (controllers/rotas) usando ferramentas como [Jest](https://jestjs.io/).
* **Variáveis de Ambiente:** Gerenciar configurações (como a porta) de forma mais robusta utilizando bibliotecas como [`dotenv`](https://github.com/motdotla/dotenv).
* **Documentação da API:** Gerar documentação interativa da API usando ferramentas como [Swagger/OpenAPI](https://swagger.io/).
* **Segurança:** Implementar medidas de segurança como rate limiting.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está licenciado sob a [ISC License](LICENSE).

---

**Nota:** Lembre-se de substituir `<URL_DO_SEU_REPOSITÓRIO>` pelo link real do seu repositório GitHub (ou onde quer que o código esteja hospedado).
