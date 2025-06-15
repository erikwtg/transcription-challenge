# Iara Health - Transcrição de Áudio em tempo Real

![GitHub](https://img.shields.io/github/license/erikwtg/transcription-challenge)
![Docker](https://img.shields.io/badge/Docker-✓-blue)
![Node.js](https://img.shields.io/badge/Node.js-✓-green)
![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue)
![Svelte](https://img.shields.io/badge/Svelte-✓-FF3E00)
![Storybook](https://img.shields.io/badge/Storybook-✓-FF4785)

**Transcrição de Áudio em tempo Real**

## O projeto foi feito com o objetivo de aprimorar a base fornecida. O projeto utiliza uma arquitetura baseada em containers Docker, com frontend em Svelte e documentação dos componentes em Storybook. Abaixo estão as instruções para configurar e rodar o ambiente de desenvolvimento.

## Tecnologias Utilizadas

- **Node.js** e **TypeScript** para o desenvolvimento.
- **Svelte** no frontend (Componente).
- **Storybook** para documentação e desenvolvimento isolado dos componentes.
- **Docker** e **Docker Compose** para facilitar a execução de todos os serviços em containers.

## Estrutura do Projeto

Abaixo está a lista de serviços incluídos:

- **app**: Componente utilizando Svelte, Node.js, TypeScript.
- **storybook**: Documentação e desenvolvimento de componentes.

## Requisitos

- **Docker** (com Docker Compose) instalado.
- **Node.js** instalado.

## Instalação e Execução

### 1. Clonar o Repositório

Primeiro, clone este repositório para sua máquina local:

```bash
git clone https://github.com/erikwtg/transcription-challenge
cd transcription-challenge
```

### 2. Construção e Execução em Modo Desenvolvimento

O projeto já possui um arquivo docker-compose.yml configurado para orquestrar os serviços.

### 3. Build e Start dos Containers

Para rodar os serviços em modo desenvolvimento, execute o seguinte comando:

```bash
./deployment.sh
```

ou

```bash
docker network create transcription_challenge_network

docker-compose -f docker-compose.yml up -d --build
```

Esse comando irá:
Criar a rede transcription_challenge_network.

Construir os containers necessários.

Rodar os serviços nas portas configuradas no docker-compose.yml.

## Acesso às Aplicações

Depois de executar o comando de inicialização, você pode acessar as aplicações através dos seguintes endereços:

- **App**: http://localhost:5173
- **Storybook**: http://localhost:6006

## Funcionalidades Implementadas

- Transcrição de áudio simulada em segmentos com requisições assíncronas.
- Garantia da ordem correta das transcrições, mesmo com respostas assíncronas fora de ordem, utilizando buffer temporário..
- Otimização do processamento e destaque de palavras-chave na transcrição utilizando expressões regulares construídas dinâmicas, evitando múltiplas substituições e melhorando a performance.
- Feedback visual para o usuário durante o carregamento das transcrições.
- Interface aprimorada para melhor experiência e usabilidade.
- Componentização do frontend utilizando Svelte.
- Documentação dos componentes com Storybook.
- Estrutura baseada em containers Docker para ambiente consistente.

## Melhorias (Coisas que gostaria de ter feito)

Embora o projeto tenha sido desenvolvido com as melhores práticas disponíveis dentro do tempo e dos requisitos do desafio, há algumas melhorias que gostaria de ter implementado:

1. Testes Unitários: Gostaria de implementar testes para melhorar a cobertura e a confiança na estabilidade da interface.

2. Tratamento de Erros: Adicionar uma camada mais robusta de tratamento de erros, tanto para falhas na requisição de dados quanto para possíveis erros de renderização, garantindo uma melhor experiência para o usuário em casos inesperados.

## Tecnologias e Estruturas Utilizadas

A escolha das tecnologias e das estruturas foi feita com base no desafio proposto.

1. **Svelte**: foi escolhido pelo seu desempenho e facilidade em criar interfaces reativas e leves.
(Obs.: Apesar de no desafio mencionar a utilização de apenas (html, css e javascript), também permite o uso de bibliotecas e frameworks a escolha. Com base na conversa anterior ao desafio, entendi que estas são stacks utilizadas pela empresa e optei utilizá-las por serem mais robustas e alinhadas. Isso me permitiu explorar conceitos como (Reatividade, Gerenciamento de Estado, Organização de Código, Performance, Escalabilidade.))

2. **Storybook**: foi escolhido por também fazer parte da stack da empresa, conforme identificado nas conversas.
(Obs.: A sua utilização permite, documentar visualmente, validação independente)

3. **Docker e Docker Compose**: foi escolhido para padronizar ambiente de desenvolvimento, facilitar deploy e garantir isolamento de serviços.
