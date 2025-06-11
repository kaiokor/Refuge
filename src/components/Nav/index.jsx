import styled from "styled-components";
import Botao from "../Botao";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/usuarioContext";

const NavContainer = styled.div`
  max-width: 1920px;
  height: 175px;
  background-color: #00302f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  color: #fff;
  font-weight: bold;
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
  gap: 64px;
  align-items: center;
  a {
    font-family: sans-serif;
    font-size: 24px;
  }
`;

export default function Nav() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <NavContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LogoContainer>
          <img
            src="/imagens/RefugeCoin.png"
            alt="Logo"
            stydled={{ width: 36 }}
          />
          <h1>Refuge</h1>
        </LogoContainer>
      </Link>
      <BotoesContainer>
        {usuario ? (
          <Link
            to="/perfil"
            style={{ textDecoration: "none", fontSize: 28, color: "inherit" }}
          >
            <p>Olá, {usuario.nome}!</p>
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p>Cadastro/login</p>
          </Link>
        )}
        <Link
          to="/premium"
          style={{ textDecoration: "none", fontSize: 28, color: "inherit" }}
        >
          {usuario && !usuario.premium && <p>Seja Premium!</p>}
        </Link>
        <Link
          to="/pesquisa"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Botao>Quero Doar</Botao>
        </Link>
      </BotoesContainer>
    </NavContainer>
  );
}
