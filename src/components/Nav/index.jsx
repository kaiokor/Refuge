import styled from "styled-components";
import Botao from "../Botao";

const NavContainer = styled.div`
  max-width: 1920px;
  height: 175px;
  background-color: #00302f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
`;
const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  h1 {
    color: #fff;
    font-family: sans-serif;
    font-size: 36px;
  }
`;
const BotoesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  a {
    color: #fff;
    font-family: sans-serif;
    font-size: 24px;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <LogoContainer>
        <img src="../../../public/imagens/logo.png" alt="Logo" />
        <h1>Refuge</h1>
      </LogoContainer>
      <BotoesContainer>
        <a>Cadastro/login</a>
        <Botao>Quero Doar</Botao>
      </BotoesContainer>
    </NavContainer>
  );
}
