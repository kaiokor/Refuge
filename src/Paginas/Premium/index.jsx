import Banner from "../../components/Banner";
import Nav from "../../components/Nav";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import { useContext, useState } from "react";
import Form from "../../components/Form";
import SecaoBotoes from "../../components/SecaoBotoes";
import SecaoDados from "../../components/SecaoDados";
import InputTexto from "../../components/inputTexto";
import { UsuarioContext } from "../../context/usuarioContext";
import { useNavigate } from "react-router-dom";

const RfgCoinsCtn = styled.div`
  width: 100%;
`;
const RfgCoinsTitulo = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-size: 54px;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  h1 {
    margin: auto;
  }
`;

const EstatisticasContainer = styled.div`
  display: flex;
  background-color: #00302f;
  justify-content: space-evenly;
  margin: 36px 0;
  padding: 48px 0;
`;

const Estatistica = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  max-width: 364px;
  font-size: 20px;
  text-align: center;
  h2 {
    display: flex;
    font-size: 48px;
    font-weight: bold;
    margin: 0;
  }
`;

const Subtitulo = styled.p`
  font-size: 36px;
`;

const RfgCoinsQtn = styled.div``;

export default function Premium() {
  const { usuario } = useContext(UsuarioContext);
  const navegar = useNavigate();
  const [dados, setDados] = useState({
    bairro: "",
    cep: "",
    cidade: "",
    codgSeguranca: "",
    complemento: "",
    estado: "",
    nomeCartao: "",
    numCartao: "",
    numero: "",
    pais: "",
    parcelas: "",
    rua: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  }

  async function Enviar(e) {
    e.preventDefault();
    const resp = fetch(
      `https://refuge-api-kdff.vercel.app/usuarios/${usuario._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ premium: true }),
      }
    );
    navegar("/");
  }

  return (
    <TelaContainer>
      <Nav />
      <Banner
        botao={false}
        titulo="Doe, receba e ajude que precisa ainda mais, e veja o impacto que vc fez em tempo real!"
      >
        <p>
          Para aqueles que amam fazer diferença, com o Plano Premium da Refuge,
          a cada doação que vc faz você recebe uma certa quantidade Refuge Coins
          em sua conta
        </p>
        <RfgCoinsCtn>
          <RfgCoinsTitulo>
            <p> Você tem:</p>
            <img
              src="/imagens/rfgCoins.png"
              style={{ width: "56px", height: "56px" }}
            />
            <p>10</p>
            <RfgCoinsQtn>Refuge Coins</RfgCoinsQtn>
          </RfgCoinsTitulo>
        </RfgCoinsCtn>
      </Banner>
      <BannerContainer>
        <Titulo>Como Funciona?</Titulo>
        <EstatisticasContainer>
          <Estatistica>
            <h2>10% da doação</h2>
            <p>
              10% do valor total da sua doação retorna como Refuge Coin para sua
              conta neste site
            </p>
          </Estatistica>
          <Estatistica>
            <h2>Por R$30,00</h2>
            <p>
              Com R$30,00 mensais você pode ajudar diversas famílias, com o
              premium a cada doação você pode doar ainda mais!
            </p>
          </Estatistica>
          <Estatistica>
            <h2>Exemplo:</h2>
            <p>
              Caso você doe R$100 <br /> Doar $100, Ganha 10 RC que equivale a
              R$10 que podem ser doados
            </p>
          </Estatistica>
        </EstatisticasContainer>
      </BannerContainer>
      <Form largura="1050px" AoEnviar={Enviar}>
        <Titulo>Assinar plano Refuge Premium</Titulo>
        <Subtitulo>
          Assine seu plano premium e receba por doar, e doe por receber!
        </Subtitulo>
        <SecaoDados descricao="Cartão">
          <InputTexto
            name="numCartao"
            value={dados.numCartao}
            AoMudar={handleChange}
            largura="500px"
            descricao="Número do cartão"
          />

          <InputTexto
            name="codgSeguranca"
            value={dados.codgSeguranca}
            AoMudar={handleChange}
            largura="500px"
            descricao="Código de segurança"
          />

          <InputTexto
            name="nomeCartao"
            value={dados.nomeCartao}
            AoMudar={handleChange}
            largura="500px"
            descricao="Nome impresso no cartão"
          />
          <InputTexto
            name="parcelas"
            value={dados.parcelas}
            AoMudar={handleChange}
            largura="500px"
            descricao="Parcelas"
          />
        </SecaoDados>
        <SecaoDados descricao="Endereço de cobrança do cartão">
          <InputTexto
            name="pais"
            value={dados.pais}
            AoMudar={handleChange}
            largura="500px"
            descricao="País"
          />
          <InputTexto
            name="bairro"
            value={dados.bairro}
            AoMudar={handleChange}
            largura="500px"
            descricao="Bairro"
          />
          <InputTexto
            name="cep"
            value={dados.cep}
            AoMudar={handleChange}
            largura="500px"
            descricao="Cep"
          />

          <InputTexto
            name="rua"
            value={dados.rua}
            AoMudar={handleChange}
            largura="500px"
            descricao="Rua"
          />
          <InputTexto
            name="estado"
            value={dados.estado}
            AoMudar={handleChange}
            largura="500px"
            descricao="Estado"
          />
          <InputTexto
            name="numero"
            value={dados.numero}
            AoMudar={handleChange}
            largura="500px"
            descricao="Número"
          />
          <InputTexto
            name="cidade"
            value={dados.cidade}
            AoMudar={handleChange}
            largura="500px"
            descricao="Cidade"
          />
          <InputTexto
            name="complemento"
            value={dados.complemento}
            AoMudar={handleChange}
            largura="500px"
            descricao="Complemento"
          />
        </SecaoDados>
        {usuario ? (
          <SecaoBotoes>Assinar Premium</SecaoBotoes>
        ) : (
          <SecaoBotoes AoClicar={() => navegar("/login")}>
            Faça login!
          </SecaoBotoes>
        )}
      </Form>
    </TelaContainer>
  );
}
