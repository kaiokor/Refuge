import Nav from "../../components/nav";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

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
  return (
    <TelaContainer>
      <Nav />
      <BannerOrg>
        <BannerTexto>
          <Titulo cor="#FFF">Agências da ONU para refugiados - ACNUR</Titulo>
          <p>
            Apoie a Agência da ONU para Refugiados e ajude a construir um futuro
            melhor!
          </p>
          <Link
            to="/doacaoOrg"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Botao
              width="356px"
              cor="#FFF"
              corFundo="rgba(0,0,0,0)"
              corLinha="#FFF"
            >
              Doar para ACNUR
            </Botao>
          </Link>
        </BannerTexto>
        <img
          src="/imagens/imgAcnur.png"
          style={{ width: "736px", height: "412px" }}
        ></img>
      </BannerOrg>
      <ConteudoContainer>
        <ConteudoTexto>
          <div>
            <Titulo>História ACNUR</Titulo>
            <p>
              O ACNUR, a Agência das Nações Unidas para Refugiados, foi criada
              em 1950. Hoje, a Agência atua em 135 países com a missão de salvar
              vidas, proteger direitos e construir um futuro melhor para pessoas
              forçadas a abandonar suas casas devido a conflitos, perseguições,
              catástrofes climáticas e violações de direitos humanos.
              Atualmente, o ACNUR segue protegendo e apoiando mais de 100
              milhões de pessoas forçadas a se deslocar. Por esse trabalho
              humanitário, recebeu duas vezes o Prêmio Nobel da Paz.
            </p>
          </div>
          <div>
            <Titulo>O que fazemos</Titulo>
            <p>
              O ACNUR faz a ponte entre pessoas afetadas por catástrofes e seus
              direitos em todas as etapas de suas jornadas em busca de segurança
              e um futuro digno. Atua em emergências, facilitando a
              regularização de seus documentos, acolhendo-as em abrigos
              temporários e atendendo às suas necessidades básicas emergenciais.
              Ainda, auxilia a integração local por meio de acesso à educação e
              programas de geração de renda, para que possam viver com autonomia
              e dignidade contribuindo para a economia local. O ACNUR é uma
              agência das Nações Unidas de natureza política, imparcial e
              independente. As finanças do ACNUR são auditadas e examinadas em
              detalhe pelo Comitê de Auditoria das Nações Unidas. Os recursos
              arrecadados vão para as pessoas que mais precisam, da forma mais
              eficiente possível. Declarada qualquer emergência, a organização
              se faz presente com assistência humanitária emergencial em até 72
              horas em qualquer lugar do mundo. Junte-se e transforme vidas:
              apoie a campanha da ACNUR  e ajude a construir um futuro melhor.
              Saiba mais sobre a organização em www.acnur.org/portugues
            </p>
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
