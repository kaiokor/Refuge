import styled from "styled-components";
import Botao from "../Botao";
import { Link } from "react-router-dom";

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
  p {
    font-size: 28px;
  }
`;

const ImagemBanner = styled.img``;

export default function Banner({
  children,
  titulo,
  tituloBotao = "Quero Doar",
  rotaBotao = "/",
  botao = true,
}) {
  return (
    <BannerContainer>
      <TextoBanner>
        <h1>{titulo}</h1>
        {children}
        <Link
          to={rotaBotao}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {botao && <Botao marginTop="18px">{tituloBotao}</Botao>}
        </Link>
      </TextoBanner>
      <ImagemBanner src="/imagens/zula.png" alt="Banner" />
    </BannerContainer>
  );
}
