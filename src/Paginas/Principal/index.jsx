import Banner from "../../components/Banner";
import BannerDoacao from "../../components/BannerDoacao";
import BannerEstatistica from "../../components/BannerEstatistica";
import Destaque from "../../components/Destaques";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import TelaContainer from "../../components/TelaContainer";

export default function Principal() {
  return (
    <TelaContainer>
      <Nav></Nav>

      <Banner
        titulo="Doe e pesquise instituições, de forma segura, e veja o impacto que vc
          fez em tempo real"
        rotaBotao="/pesquisa"
      >
        Com a Refuge, certificamos que sua doação chegará para os mais
        necessitados, sendo também fonte de informações, a Refuge te ajuda na
        sua caminhada oferecendo o apoio que você precisa para ajudar refugiados
      </Banner>
      <BannerEstatistica />
      <BannerDoacao />
      <Destaque />
      <Footer />
    </TelaContainer>
  );
}
