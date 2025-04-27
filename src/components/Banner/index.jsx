import styled from "styled-components";
import Botao from "../Botao";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 64px 200px;
`;

const TextoBanner = styled.div`
  font-size: 20px;
  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #00302f;
  }
`;

const ImagemBanner = styled.img``;

export default function Banner() {
  return (
    <BannerContainer>
      <TextoBanner>
        <h1>
          Doe e pesquise instituições, de forma segura, e veja o impacto que vc
          fez em tempo real
        </h1>
        <p>
          Com a Refuge, certificamos que sua doação chegará para os mais
          necessitados, sendo também fonte de informações, a Refuge te ajuda na
          sua caminhada oferecendo o apoio que você precisa para ajudar
          refugiados
        </p>
        <Botao>Quero Doar</Botao>
      </TextoBanner>
      <ImagemBanner src="../../../public/imagens/zula.png" alt="Banner" />
    </BannerContainer>
  );
}
