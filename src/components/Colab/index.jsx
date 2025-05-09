import { Link } from "react-router-dom";
import Form from "../Form";
import styled from "styled-components";
import CardMonetario from "../CardMonetario";
import SecaoBotoes from "../SecaoBotoes";
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

export default function Colab({ rota = "/" }) {
  const route = rota;
  return (
    <Form titulo="Doação Monetaria" largura="1135px">
      <ContainerCardMonetario>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="5,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="10,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="20,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="50,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="100,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="150,00"></CardMonetario>
        </Link>
        <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
          <CardMonetario valor="200,00"></CardMonetario>
        </Link>
        <OutrasOpcoes>
          <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
            <CardContainer>
              <CardTitulo>Doe Outro</CardTitulo>
            </CardContainer>
          </Link>
          <Link to={route} style={{ textDecoration: "none", color: "inherit" }}>
            <CardContainer>
              <img
                src="/imagens/RefugeCoin.png"
                style={{ width: "56px", height: "56px" }}
              />
              <CardTitulo>Refuge Coin</CardTitulo>
            </CardContainer>
          </Link>
        </OutrasOpcoes>
      </ContainerCardMonetario>
      <SecaoBotoes caminho={route}></SecaoBotoes>
    </Form>
  );
}
