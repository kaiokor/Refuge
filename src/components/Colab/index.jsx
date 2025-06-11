import { useNavigate } from "react-router-dom";
import Form from "../Form";
import styled from "styled-components";
import CardMonetario from "../CardMonetario";
import SecaoBotoes from "../SecaoBotoes";
import { useState } from "react";
const ContainerCardMonetario = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px 0;
`;

const OutrasOpcoes = styled.div`
  display: flex;
  gap: 100px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 200px;
  height: 120px;
  border: 3px solid #006d5b;
  border-radius: 8px;
  background-color: #f2f1ed;

  box-sizing: border-box;
`;

const CardTitulo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #006d5b;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
`;

export default function Colab({ rota, dadosPessoais }) {
  const [cardSelecionado, setCardSelecionado] = useState();
  const [valorSelecionado, setValorSelecionado] = useState();
  const caminho = `${rota}/${valorSelecionado}/${dadosPessoais}`;
  const navegar = useNavigate();
  function Selecionar(CardSelecionado) {
    setCardSelecionado(CardSelecionado);
    setValorSelecionado(dadosCard[CardSelecionado].valor);
  }

  const dadosCard = [
    {
      valor: "5,00",
      descricao:
        "Equivale a 1 garrafa de 500 ml de água mineral + 1 pacote de biscoito simples",
    },
    {
      valor: "10,00",
      descricao:
        "Equivale a Kit de higiene básico: sabonete, shampoo (tamanho viagem) e escova de dente genérica",
    },
    {
      valor: "20,00",
      descricao:
        "1 kit de medicamentos OTC (analgésico, antitérmico e antisséptico tópico)",
    },
    {
      valor: "50,00",
      descricao:
        "Cesta de alimentos de médio porte (arroz, feijão, óleo, açúcar, café, sal — 5 a 7 itens)",
    },
    {
      valor: "100,00",
      descricao:
        "1 colchão inflável simples + 1 jogo de cama (lençol + fronhas)",
    },
    {
      valor: "150,00",
      descricao:
        "“Starter pack” familiar: cesta de alimentos, kit higiene completo e vale-transporte para o mês",
    },
    {
      valor: "200,00",
      descricao:
        "Montagem de mobília essencial: colchonete + fogareiro portátil + utensílios de cozinha",
    },
  ];

  return (
    <Form titulo="Doação Monetaria" largura="1135px">
      <ContainerCardMonetario>
        {dadosCard.map((item, index) => (
          <CardMonetario
            key={index}
            valor={item.valor}
            descricao={item.descricao}
            selecionado={cardSelecionado == index ? true : false}
            AoClicar={() => Selecionar(index)}
          ></CardMonetario>
        ))}

        <OutrasOpcoes>
          <CardContainer>
            <CardTitulo>Doe Outro</CardTitulo>
          </CardContainer>

          <CardContainer>
            <img
              src="/imagens/RefugeCoin.png"
              style={{ width: "56px", height: "56px" }}
            />
            <CardTitulo onClick={() => navegar(`/refuge`)}>
              Refuge Coin
            </CardTitulo>
          </CardContainer>
        </OutrasOpcoes>
      </ContainerCardMonetario>
      <SecaoBotoes tipo="button" AoClicar={() => navegar(caminho)} />
    </Form>
  );
}
