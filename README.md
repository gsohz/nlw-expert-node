# NLW EXPERT NODEJS - Enquetes

Uma aplicação de enquetes com votos, onde o usuário pode criar uma enquete com as opções de votos, resgatar essas enquetes e ver o voto em tempo real e pode votar em uma das opções apenas. Se ele mudar a opção de voto, o anterior será desconsiderado e ele não pode votar na mesma mais de uma vez.

## ⚙️ Funcionalidades

- **Criar Enquete:** Os usuários podem criar enquetes com opções de votos.
- **Resgatar Enquetes:** As enquetes podem ser resgatadas pelos usuários.
- **Votar em Tempo Real:** Os usuários podem ver os votos em tempo real.
- **Votar Apenas uma Vez:** Os usuários podem votar em uma opção apenas. Se mudarem de opção, o voto anterior é desconsiderado.
- **Evitar Votos Duplos:** Os usuários não podem votar na mesma opção mais de uma vez.

## 🧪 Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento utilizada para construir o back-end da aplicação.
- **TypeScript:** Linguagem de programação utilizada para escrever código mais robusto e com menos erros.
- **Fastify:** Framework web utilizado para criar a API REST de forma rápida e eficiente.
- **Prisma ORM:** ORM utilizado para interagir com o banco de dados PostgreSQL de forma simplificada.
- **Docker:** Utilizado para criar e gerenciar contêineres para os serviços de PostgreSQL e Redis.
- **Redis:** Banco de dados em memória utilizado para armazenar dados temporários, como votos em tempo real.
- **Zod:** Biblioteca utilizada para validar os dados recebidos pelas requisições à API.
- **WebSocket:** Protocolo de comunicação em tempo real utilizado para visualização de informações em tempo real.

## 📚 O que Aprendi

- **WebSocket para Tempo Real:** Aprendi a utilizar o WebSocket para visualização de informações em tempo real na aplicação.
- **Validação de Dados com Zod:** Utilizei o Zod para validar os dados recebidos pelas requisições à API, garantindo a integridade e consistência dos dados.
- **Criação de Cookies com Fastify:** Aprendi a criar cookies utilizando a biblioteca Fastify para autenticação e gerenciamento de sessões.

## 🔃 Rotas
### POST `/polls`
- Cria nova enquete com suas opções de voto.
### BODY
- Request
```
{
    "title": "Qual o melhor framework Node.js?",
    "options": ["Express", "Fastify", "NestJS", "HapiJS"]
}
```
- Response

```
{
    "pollId": "194cef73-8dc9-66a3-abd4-bb98b4bc34b5"
}
```

### GET `/polls/:pollId`
- Retorna os dados de uma enquete específica.
### BODY
- Response
```
{
    "poll": {
        "id": "f975e759-1d2b-4f7b-af05-59828807869a",
        "title": "Qual o melhor framework Node.js?",
        "options": [
            {
                "id": "4604c731-8b21-49eb-a709-d1df7435dc71",
                "title": "Express",
                "score": 0
            },
            {
                "id": "d7a2fc2d-b798-4670-8b1a-c21f0b17b740",
                "title": "Fastify",
                "score": 0
            },
            {
                "id": "8032dda9-4a66-4a54-8c2f-093d1a6c8ec5",
                "title": "NestJS",
                "score": 0
            },
            {
                "id": "df2dd847-227d-4bdc-9eb8-f986950cedef",
                "title": "HapiJS",
                "score": 1
            }
        ]
    }
}
```

### POST `/polls/:pollId/votes`
- Registra o voto em uma enquete específica.

### BODY
- Request
```
{
    "pollOptionId": "df2dd847-227d-4bdc-9eb8-f986950cedef"
}
```

### WEBSOCKETS
### ws `/polls/:pollId/results`
- Message
```
{
  "pollOptionId": "df2dd847-227d-4bdc-9eb8-f986950cedef",
  "votes": 2
}
```

## ▶️ Instalação
1. Baixe o repositório para sua máquina local
2. Crie sua `.env` com base no arquivo `.env.example`
3. Instale as dependências com o comando `npm install` no terminal do projeto
4. Inicie o docker com o seguinte comando docker-compose up -d
5. Inicie o projeto com o comando `npm run dev`
6. URL base de requisição: http://localhost:3333
