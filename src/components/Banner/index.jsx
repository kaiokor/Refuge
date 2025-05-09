import styled from "styled-components";
import Botao from "../Botao";
import { Link } from "react-router-dom";
import { children } from "react";

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

export default function Banner({
  children,
  titulo,
  tituloBotao = "Quero Doar",
  rotaBotao = "/",
}) {
  return (
    <BannerContainer>
      <TextoBanner>
        <h1>{titulo}</h1>
        <p>{children}</p>
        <Link
          to={rotaBotao}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Botao>{tituloBotao}</Botao>
        </Link>
      </TextoBanner>
      <ImagemBanner src="/imagens/zula.png" alt="Banner" />
    </BannerContainer>
  );
}
