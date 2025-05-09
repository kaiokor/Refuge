import styled from "styled-components";
import Botao from "../Botao";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  max-width: 420px;
  background-color: #f2f1ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const ImagemContainer = styled.img``;

const InfoContainer = styled.div`
  padding: 20px;
  h1 {
    font-size: 16px;
    color: rgba(0, 128, 129, 0.5);
    margin: 4px 0 0 0;
  }
  h2 {
    font-size: 24px;
    color: #006d5b;
    margin: 0 0 0 4px;
  }
  p {
    margin: 12px 0 40px 0;
  }
`;

const BotaoEstilizado = styled.div`
  width: 100%;
  height: 50px;
  background-color: #006d5b;
  border-radius: 32px;
  border: 2px solid #19433f;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  color: #fff;
`;

export default function CardOrg() {
  return (
    <CardContainer>
      <ImagemContainer src="/imagens/imgAcnur.png" />
      <InfoContainer>
        <h1>São Paulo - SP </h1>
        <h2>UNHCR ACNUR</h2>
        <p>
          Organização que protege pessoas que foram forçadas a deixar suas
          casas.
        </p>
        <Link to="/paginaOrg" style={{ textDecoration: "none" }}>
          <BotaoEstilizado>Saiba Mais</BotaoEstilizado>
        </Link>
      </InfoContainer>
    </CardContainer>
  );
}
