import styled from "styled-components";
import InputQuantidade from "../InputQuantidade";
import SecaoBotoes from "../SecaoBotoes";
import InputTexto from "../inputTexto";

const DivPergunta = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    color: green;
    font-size: 34px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
`;

export default function SecaoInput({
  descricao,
  dados,
  setDados,
  AoMudar,
  name,
  nameTexto,
  value,
  valueTexto,
  inputQuant = true,
  refugeCoins,
  erro,
}) {
  return (
    <>
      <DivPergunta>
        <InputTexto
          value={valueTexto}
          name={nameTexto}
          AoMudar={AoMudar}
          descricao={descricao}
        ></InputTexto>
        {inputQuant ? (
          <InputQuantidade
            value={value}
            name={name}
            AoMudar={AoMudar}
            descricao={descricao}
            dados={dados}
            setDados={setDados}
          ></InputQuantidade>
        ) : (
          <p>= R$ {value}</p>
        )}
      </DivPergunta>
      {erro && <p>{erro}</p>}
    </>
  );
}
