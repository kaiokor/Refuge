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

export default function SecaoPergunta({
  descricao,
  AoMudar,
  value,
  name,
  dados,
  setDados,
}) {
  return (
    <DivPergunta>
      <TituloEstilizado>{descricao}</TituloEstilizado>
      <InputQuantidade
        AoMudar={AoMudar}
        value={value}
        name={name}
        dados={dados}
        setDados={setDados}
      ></InputQuantidade>
    </DivPergunta>
  );
}
