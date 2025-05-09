import styled from "styled-components";
import InputQuantidade from "../InputQuantidade";
import SecaoBotoes from "../SecaoBotoes";
import InputTexto from "../inputTexto";

const DivPergunta = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default function SecaoInput({ descricao }) {
  return (
    <>
      <DivPergunta>
        <InputTexto descricao={descricao}></InputTexto>
        <InputQuantidade></InputQuantidade>
      </DivPergunta>
    </>
  );
}
