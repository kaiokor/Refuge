import { Link } from "react-router-dom";
import CardDoacaoOutro from "../../../components/CardDoacao/CardDoacaoOutro";
import Nav from "../../../components/nav";
import TelaContainer from "../../../components/TelaContainer";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";
import Footer from "../../../components/Footer";

const ColabOutroContainer = styled.div`
  width: 1132px;
  margin: 124px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 28px;
`;

export default function ColabOutro() {
  return (
    <TelaContainer>
      <Nav />
      <ColabOutroContainer>
        <Titulo>Outras doações</Titulo>
        <CardsContainer>
          <Link
            to="/doacaoOrg/colabOutro/Brinquedo"
            style={{ textDecoration: "none" }}
          >
            <CardDoacaoOutro>Brinquedos</CardDoacaoOutro>
          </Link>
          <Link
            to="/doacaoOrg/colabOutro/Roupa"
            style={{ textDecoration: "none" }}
          >
            <CardDoacaoOutro>Roupas</CardDoacaoOutro>
          </Link>
          <Link
            to="/doacaoOrg/colabOutro/Livro"
            style={{ textDecoration: "none" }}
          >
            <CardDoacaoOutro>Livros</CardDoacaoOutro>
          </Link>
          <Link
            to="/doacaoOrg/colabOutro/Comida"
            style={{ textDecoration: "none" }}
          >
            <CardDoacaoOutro>Comida</CardDoacaoOutro>
          </Link>
          <Link
            to="/doacaoOrg/colabOutro/TrabVoluntario"
            style={{ textDecoration: "none" }}
          >
            <CardDoacaoOutro tamanhoTexto={36}>
              Trabalho Voluntario
            </CardDoacaoOutro>
          </Link>
        </CardsContainer>
      </ColabOutroContainer>
      <Footer />
    </TelaContainer>
  );
}
