import styled from "styled-components";
import Titulo from "../Titulo";

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

const TextoEstatistica = styled.p`
  max-width: 1400px;
  font-size: 24px;
  margin: 16px auto;
`;

export default function BannerEstatistica() {
  return (
    <BannerContainer>
      <Titulo>Deslocamento forçado no mundo</Titulo>
      <EstatisticasContainer>
        <Estatistica>
          <h2>122,6 milhões</h2>
          <p>
            Mais de 122,6 milhões de pessoas que foram descoladas à força até
            meados de 2024
          </p>
        </Estatistica>
        <Estatistica>
          <h2>1 em 67</h2>
          <p>Isso equivale a mais de 1 em cada 67 pessoas em todo o mundo</p>
        </Estatistica>
        <Estatistica>
          <h2>87%</h2>
          <p>
            A maioria dessas pessoas (87%) esta em países de média e baixa renda
          </p>
        </Estatistica>
      </EstatisticasContainer>
      <TextoEstatistica>
        Até junho de 2024, 122,6 milhões de pessoas em todo o mundo foram
        forçadas a se deslocar devido a perseguições, conflitos, violência,
        violações de direitos humanos e eventos que perturbaram seriamente a
        ordem pública. 
      </TextoEstatistica>
      <TextoEstatistica>
        Isso representa um aumento de 5%, ou 5,3 milhões de pessoas, em
        comparação com o final de 2023. Por mais de 12 anos, o número de pessoas
        forçadas a se deslocar seguiu aumentando continuamente. Até o final de
        junho de 2024, 1 em cada 67 pessoas em todo o mundo havia se deslocado à
        força - 87% delas vivem em países de baixa e média renda.
      </TextoEstatistica>
      <TextoEstatistica>
        O ACNUR estima que o deslocamento forçado tenha aumentado ainda mais
        desde junho de 2024 e, a não ser que haja uma rápida evolução positiva
        em uma ou mais situações de grande deslocamento, continuará a aumentar
        em 2024.
      </TextoEstatistica>
    </BannerContainer>
  );
}
