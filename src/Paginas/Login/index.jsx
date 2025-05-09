import styled from "styled-components";
import TelaContainer from "../../components/TelaContainer";
import Nav from "../../components/nav";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import Botao from "../../components/Botao";
import { Link, useNavigate } from "react-router-dom";

const TelaLoginContainer = styled.div`
  background-color: #19433f;
  width: 1660px;
  height: 935px;
  margin: 64px auto;
  display: flex;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 640px;
  margin: auto;
`;

const VoltarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  cursor: pointer;
  p {
    color: #f2f1ed;
    font-size: 28px;
    font-weight: bold;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: 16px;
  h1 {
    color: #fff;
    font-family: sans-serif;
    font-size: 36px;
  }
`;

const ContainerBotao = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: right;
`;
export default function Login() {
  return (
    <TelaContainer>
      <TelaLoginContainer>
        <img src="/imagens/login.png"></img>
        <LoginContainer>
          <Form>
            <Link
              to="/"
              style={{ width: 64, textDecoration: "none", color: "inherit" }}
            >
              <VoltarContainer>
                <img src="/imagens/voltar.png" style={{ height: 36 }}></img>
                <p>Voltar</p>
              </VoltarContainer>
            </Link>

            <LogoContainer>
              <img src="/imagens/logo.png" alt="Logo" />
              <h1>Refuge</h1>
            </LogoContainer>
            <InputTexto descricao="Login" cor="#F2F1ED"></InputTexto>
            <InputTexto descricao="Senha" cor="#F2F1ED"></InputTexto>
            <ContainerBotao>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Botao corFundo="#F2F1ED" cor="#006D5B" corLinha="#006D5B">
                  Entrar
                </Botao>
              </Link>
            </ContainerBotao>
          </Form>
        </LoginContainer>
      </TelaLoginContainer>
    </TelaContainer>
  );
}
