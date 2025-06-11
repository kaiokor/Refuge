import styled from "styled-components";
import Botao from "../Botao";
import { useNavigate } from "react-router-dom";

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  gap: 27px;
`;

export default function SecaoBotoes({
  tamanhoBotoes = "231px",
  children = "doar",
  AoClicar,
  tipo = "submit",
}) {
  const navegar = useNavigate();

  return (
    <ContainerBotoes>
      <Botao
        width={tamanhoBotoes}
        cor="rgba(0,0,0,0.5)"
        corFundo="none"
        corLinha=" rgba(0,0,0,0.5)"
        onClick={() => navegar(-1)}
      >
        Voltar
      </Botao>

      <Botao type={tipo} width={tamanhoBotoes} onClick={AoClicar}>
        {children}
      </Botao>
    </ContainerBotoes>
  );
}
