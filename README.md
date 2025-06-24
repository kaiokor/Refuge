# Refuge 🌏💙 (Projeto Acadêmico)

> Plataforma front-end para conectar doadores a campanhas de apoio a refugiados.

# Problema

Atualmente existem mais de 100 milhões de pessoas que se encontram em situação de deslocamento forçado, sendo assim carentes de recursos básicos como comida, água ou abrigo. Organizações públicas movimentam projetos para coletar doações ou trabalhos voluntários e oferecer esse apoio aos necessitados. O problema é que só pesquisar alguma plataforma para efetuar essa doação na internet muitas vezes não é suficiente, pois elas não oferecem informações suficientes e muito menos possuem um sistema que instigue o doador a doar de fato.

# Objetivo e Ideia

A ideia do projeto é oferecer um ambiente para facilitar a pesquisa de organizações públicas que aceitem algum tipo de doação, especialmente para pessoas refugiadas, e incentivar aos doadores doarem ainda mais, como? Por meio dos `Refuge Coins`!

A cada doação feita por meio de uma conta com assinatura premium, é retornado uma quantidade de `Refuge Coins` que equivalem a 10% do valor doado (ou seja, se doar R$ 150 o usuário ganha 15 REFUGE COINS). O doador pode usar essa moeda do sistema para doar ainda mais pois ela equivale a um valor monetário dentro do sistema (15 REFUGE COINS = R$ 15)!

---

## 📋 Sumário

- [Demo](#-demo)  
- [Tecnologias](#-tecnologias)  
- [Funcionalidades](#-funcionalidades)  
- [Como usar](#-como-usar)  
  - [Pré-requisitos](#pré-requisitos)  
  - [Instalação](#instalação)  
  - [Variáveis de ambiente](#variáveis-de-ambiente)  
- [Integração com API](#-integração-com-api)  
- [Roadmap](#-roadmap)  
- [Contribuição](#-contribuição)  
- [Licença](#-licença)  
- [Autor](#-autor)

---

## 💻 Demo

> Em desenvolvimento — por enquanto, veja uma prévia em:  
> 🔗 https://refuge-one.vercel.app

---

## 🛠️ Tecnologias

- **Framework**: React  
- **Estilização**: Styled Components  
- **Deploy**: Vercel  

---

## ✨ Funcionalidades
- CRUD de contas
- Listagem de campanhas ativas  
- Detalhes de cada campanha (descrição, imagem, público-alvo)  
- Formulário de doação
- Ativação de assinatura premium para conta cadastrada
- Logistica para Refuge Coins


> **Em construção:** QRCode para PIX, validação de formulários, cadastro com contas do Google, responsividade, filtro por faixa etária (crianças, idosos), mascote e tema visual refinado.

---

## 🚀 Como usar

### Pré-requisitos

- Node.js ≥ 16  
- npm  
- Endereço da API (arquivo `.env` com variável DB_CONNECTION_STRING = LINK_DO_MONGODB_ATLAS)

### Instalação

```bash
# clone o repositório
git clone https://github.com/kaiokor/Refuge.git
cd Refuge

# instale dependências
npm install

# rode em modo de desenvolvimento
npm run dev
