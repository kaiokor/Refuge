import Nav from "../../components/Nav";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import CardDoacao from "../../components/CardDoacao";
import { Link, useParams } from "react-router-dom";

const DoaContainer = styled.div`
  max-width: 100%;
  display: flex;
  background-color: #19433f;
`;

const ConteudoContainer = styled.div`
  width: 580px;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardDoacaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function DoacaoOrg() {
  const params = useParams();
  const rotaUnica = `/doacaoOrg/${params.id}/colabUnica`;
  const rotaMensal = `/doacaoOrg/${params.id}/colabMensal`;
  const rotaOutro = `/doacaoOrg/${params.id}/colabOutro`;
  return (
    <TelaContainer>
      <Nav />
      <DoaContainer>
        <ConteudoContainer>
          <Titulo cor="#FFF">De qual forma deseja colaborar?</Titulo>
          <CardDoacaoContainer>
            <Link
              to={rotaUnica}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardDoacao
                titulo="Colaboração Única"
                subtitulo="Quero fazer uma doação pontual para a campanha"
              ></CardDoacao>
            </Link>
            <Link
              to={rotaMensal}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardDoacao
                titulo="Colaboração Mensal"
                subtitulo="Quero em tornar um doador Mensal da campanha"
              ></CardDoacao>
            </Link>
            <Link
              to={rotaOutro}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardDoacao
                titulo="Outro:"
                subtitulo="Selecione outro tipo de doação aceita pela instituição"
              ></CardDoacao>
            </Link>
          </CardDoacaoContainer>
        </ConteudoContainer>
        <img src="/imagens/sideDoacao.png"></img>
      </DoaContainer>
    </TelaContainer>
  );
}
