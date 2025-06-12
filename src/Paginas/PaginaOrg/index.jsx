import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { OrgContext } from "../../context/OrgContext";
import { UsuarioContext } from "../../context/UsuarioContext";
import Nav from "../../components/Nav";

const BannerOrg = styled.div`
  background-color: #19433f;
  padding: 135px 270px;
  display: flex;
  gap: 32px;
`;

const BannerTexto = styled.div`
  color: white;
  p {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const ConteudoContainer = styled.div`
  max-width: 1300px;
  margin: 64px auto;
  display: flex;
  gap: 74px;
  p {
    font-size: 20px;
    text-indent: 64px;
    text-align: justify;
  }
`;
const ConteudoTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const ConteudoGaleria = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImagemGaleria = styled.img`
  border-radius: 8px;
`;

export default function PaginaOrg() {
  const { org } = useContext(OrgContext);
  const { usuario } = useContext(UsuarioContext);
  const [dadosOrg, setDadosOrg] = useState({});
  const parametros = useParams();

  useEffect(() => {
    const orgExiste = org.find((item) => item.id === Number(parametros.id));
    if (orgExiste) {
      setDadosOrg(orgExiste);
    } else {
      console.log("Org não existe");
    }
  }, [dadosOrg]);
  const caminho = `/doacaoOrg/${dadosOrg.id}`;

  return (
    <TelaContainer>
      <Nav />
      <BannerOrg>
        <BannerTexto>
          <Titulo cor="#FFF">{dadosOrg.nome}</Titulo>
          <p>
            Apoie a {dadosOrg.nomeBreve} e ajude a construir um futuro melhor!
          </p>
          {usuario ? (
            <Link
              to={caminho}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Botao
                width="356px"
                cor="#FFF"
                corFundo="rgba(0,0,0,0)"
                corLinha="#FFF"
              >
                Doar para {dadosOrg.nomeBreve}
              </Botao>
            </Link>
          ) : (
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Botao
                width="356px"
                cor="#FFF"
                corFundo="rgba(0,0,0,0)"
                corLinha="#FFF"
              >
                Faça login para conseguir logar
              </Botao>
            </Link>
          )}
        </BannerTexto>
        <img
          src={dadosOrg.imgBanner}
          style={{ width: "736px", height: "412px" }}
        ></img>
      </BannerOrg>
      <ConteudoContainer>
        <ConteudoTexto>
          <div>
            <Titulo>História {dadosOrg.nomeBreve}</Titulo>
            <p>{dadosOrg.historia}</p>
          </div>
          <div>
            <Titulo>O que fazemos</Titulo>
            <p>{dadosOrg.causa}</p>
          </div>
        </ConteudoTexto>
        <ConteudoGaleria>
          <ImagemGaleria src="/imagens/galeria1.png" alt="Galeria 1" />
          <ImagemGaleria src="/imagens/galeria2.png" alt="Galeria 2" />
          <ImagemGaleria src="/imagens/galeria3.png" alt="Galeria 3" />
        </ConteudoGaleria>
      </ConteudoContainer>
      <Footer />
    </TelaContainer>
  );
}
