import styled from "styled-components";
import CardOrg from "../CardOrg";

const DestaqueContainer = styled.div``;
const HeaderContainer = styled.div`
  max-width: 1400px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #006d5b;
    font-size: 36px;
  }
  a {
    text-decoration: underline;
    color: #000;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function Destaque() {
  return (
    <DestaqueContainer>
      <HeaderContainer>
        <h1>Organizações Destaque:</h1>
        <a href="#">Ver todas</a>
      </HeaderContainer>
      <CardsContainer>
        <CardOrg />
        <CardOrg />
        <CardOrg />
      </CardsContainer>
    </DestaqueContainer>
  );
}
