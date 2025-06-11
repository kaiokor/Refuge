import styled from "styled-components";
import CardOrg from "../CardOrg";
import { useContext } from "react";
import { OrgContext } from "../../context/OrgContext";
import { Link } from "react-router-dom";

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
  const { org } = useContext(OrgContext);

  return (
    <DestaqueContainer>
      <HeaderContainer>
        <h1>Organizações Destaque:</h1>
        <Link to="/pesquisa">
          <p>Ver todas</p>
        </Link>
      </HeaderContainer>
      <CardsContainer>
        <CardOrg
          id={org[0].id}
          banner={org[0].imgBanner}
          local={org[0].localizacao}
          nomeBreve={org[0].nomeBreve}
          descricao={org[0].descricao}
        />
        <CardOrg
          id={org[1].id}
          banner={org[1].imgBanner}
          local={org[1].localizacao}
          nomeBreve={org[1].nomeBreve}
          descricao={org[1].descricao}
        />
        <CardOrg
          id={org[2].id}
          banner={org[2].imgBanner}
          local={org[2].localizacao}
          nomeBreve={org[2].nomeBreve}
          descricao={org[2].descricao}
        />
      </CardsContainer>
    </DestaqueContainer>
  );
}
