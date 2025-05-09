import BannerPesquisa from "../../components/BannerPesquisa";
import EstilosGlobais from "../../components/EstilosGlobais";
import Nav from "../../components/nav";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import CardOrg from "../../components/CardOrg";
import Footer from "../../components/Footer";
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  gap: 32px;
`;

const EncontradoContaner = styled.div`
  margin: 100px 0 32px 254px;
`;

export default function Pesquisa() {
  return (
    <TelaContainer>
      <Nav />
      <BannerPesquisa />
      <EncontradoContaner>
        <Titulo>8 iniciativas encontradas</Titulo>
      </EncontradoContaner>
      <CardContainer>
        <CardOrg />
        <CardOrg />
        <CardOrg />
        <CardOrg />
        <CardOrg />
        <CardOrg />
      </CardContainer>
      <Footer />
    </TelaContainer>
  );
}
