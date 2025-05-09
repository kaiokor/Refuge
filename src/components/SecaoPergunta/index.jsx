import styled from "styled-components";
import InputQuantidade from "../InputQuantidade";

const TituloEstilizado = styled.h1`
  font-size: 32px;
  color: #006d5b;
`;

const DivPergunta = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default function SecaoPergunta({ descricao }) {
  return (
    <DivPergunta>
      <TituloEstilizado>{descricao}</TituloEstilizado>
      <InputQuantidade></InputQuantidade>
    </DivPergunta>
  );
}
