import BannerPesquisa from "../../components/BannerPesquisa";
import EstilosGlobais from "../../components/EstilosGlobais";
import Nav from "../../components/nav";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import CardOrg from "../../components/CardOrg";
import Footer from "../../components/Footer";
import { useContext, useState } from "react";
import { OrgContext } from "../../context/OrgContext";
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
  const { org } = useContext(OrgContext);
  const [pesquisa, setPesquisa] = useState({
    estado: "",
    nome: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPesquisa((prev) => ({ ...prev, [name]: value }));
  }
  const OrgFiltrada = org.filter(
    (item) =>
      item.nomeBreve.toLowerCase().includes(pesquisa.nome.toLowerCase()) &&
      item.localizacao.includes(pesquisa.estado)
  );

  function Envio(e) {
    e.preventDefault();
    console.log(pesquisa);
  }

  return (
    <TelaContainer>
      <Nav />
      <BannerPesquisa
        onChange={handleChange}
        dados={pesquisa}
        setDados={setPesquisa}
        Envio={Envio}
      />
      <EncontradoContaner>
        <Titulo>{OrgFiltrada.length} iniciativas encontradas</Titulo>
      </EncontradoContaner>
      <CardContainer>
        {OrgFiltrada.map((item, i) => (
          <CardOrg
            key={i}
            id={item.id}
            banner={item.imgBanner}
            local={item.localizacao}
            nomeBreve={item.nomeBreve}
            descricao={item.descricao}
          />
        ))}
      </CardContainer>
      <Footer />
    </TelaContainer>
  );
}
