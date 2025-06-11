import styled from "styled-components";
import TelaContainer from "../../components/TelaContainer";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import { Link, useNavigate } from "react-router-dom";
import SecaoBotoes from "../../components/SecaoBotoes";
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/usuarioContext";
import Nav from "../../components/Nav";

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

// seta + voltar
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

// Logo + refuge
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
  width: 100%;
  display: flex;
  justify-content: right;
`;

const CadastrarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  p {
    color: white;
  }
`;

export default function Login() {
  const [erro, setErro] = useState();
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const navegar = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  async function TemUsuario(e) {
    e.preventDefault();
    try {
      const resp = await fetch("https://refuge-api-kdff.vercel.app/usuarios");
      const dados = await resp.json();
      const usuarioExiste = dados.some(
        (item) => item.email === login.email && item.senha === login.senha
      );

      if (usuarioExiste) {
        const user = dados.find(
          (item) => item.email === login.email && item.senha === login.senha
        );
        setUsuario(user);
        navegar("/perfil");
      } else {
        setErro("Email ou senha incorretos :(");
      }
    } catch (erro) {
      console.log(erro);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  }

  function Enviar(e) {
    e.preventDefault();
    console.log("enviado");
  }

  return (
    <TelaContainer>
      <Nav />
      <TelaLoginContainer>
        <img src="/imagens/login.png"></img>
        <LoginContainer>
          <Form AoEnviar={Enviar}>
            <div>
              <Link to="/" style={{ width: 64, textDecoration: "none" }}>
                <VoltarContainer>
                  <img src="/imagens/voltar.png" style={{ height: 36 }}></img>
                  <p>Voltar</p>
                </VoltarContainer>
              </Link>
              <LogoContainer>
                <img src="/imagens/logo.png" alt="Logo" />
                <h1>Refuge</h1>
              </LogoContainer>
            </div>

            <InputTexto
              descricao="email"
              cor="#F2F1ED"
              name="email"
              value={login.email}
              AoMudar={handleChange}
            ></InputTexto>
            <InputTexto
              descricao="Senha"
              cor="#F2F1ED"
              name="senha"
              value={login.senha}
              AoMudar={handleChange}
              type="password"
            ></InputTexto>
            <CadastrarContainer>
              <p>
                Ainda não se cadastrou?
                <Link
                  to="/cadastro"
                  style={{ fontWeight: "Bold", color: "inherit" }}
                >
                  Cadastre-se
                </Link>
              </p>
              {erro && <p> {erro}</p>}
            </CadastrarContainer>
            <ContainerBotao>
              <SecaoBotoes AoClicar={TemUsuario} caminho="/perfil">
                Logar
              </SecaoBotoes>
            </ContainerBotao>
          </Form>
        </LoginContainer>
      </TelaLoginContainer>
    </TelaContainer>
  );
}
