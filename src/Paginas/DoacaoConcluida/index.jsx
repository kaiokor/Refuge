import styled from "styled-components";
import Banner from "../../components/Banner";
import TelaContainer from "../../components/TelaContainer";

const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function DoacaoConcluida() {
  return (
    <TelaContainer>
      <BannerContainer>
        <Banner
          titulo="Muito obrigado pela sua doação!"
          tituloBotao="Voltar ao início"
          rotaBotao="/"
        >
          Sua ação afetará a vida de diversas famílias, continue ajudando
          aqueles que precisam de verdade. Seu apoio fez e faz diferença!
        </Banner>
        ;
      </BannerContainer>
    </TelaContainer>
  );
}
