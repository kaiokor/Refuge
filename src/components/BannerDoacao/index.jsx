import styled from "styled-components";
import Titulo from "../Titulo";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
  margin: 36px 0;
`;
const Card = styled.div`
  border: 3px solid #006d5b;
  border-radius: 8px;
  width: 450px;
  height: 220px;
  background-color: #f2f1ed;
  padding: 16px 32px;
  box-sizing: border-box;
  h1 {
    color: #006d5b;
  }
`;

export default function BannerDoacao() {
  return (
    <BannerContainer>
      <Titulo>Porque doar na Refuge?</Titulo>
      <CardsContainer>
        <Card>
          <img src="/imagens/seguranca.png"></img>
          <h1>Segurança</h1>
          <p>Segurança garantida na transferência monetaria</p>
        </Card>
        <Card>
          <img src="/imagens/velocidade.png"></img>
          <h1>Velocidade</h1>
          <p>Pesquisas rápidas e informativas sobre orgs</p>
        </Card>
        <Card>
          <img src="/imagens/coroa.png"></img>
          <h1>Premium</h1>
          <p>Cashback por doações no plano premium</p>
        </Card>
      </CardsContainer>
    </BannerContainer>
  );
}
