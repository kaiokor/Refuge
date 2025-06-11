import styled from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  height: 120px;
  border: 3px solid ${(props) => (props.$selecionado ? "#19433F" : "#006D5B")};
  border-radius: 8px;
  background-color: ${(props) => (props.$selecionado ? "#006d5b" : "#f2f1ed")};
  padding: 16px 42px;
  box-sizing: border-box;
  cursor: pointer;
`;

const CardTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: ${(props) => (props.$selecionado ? "#f2f1ed" : "#006d5b")};
    font-size: 36px;
    margin: 0;
  }
`;

const CardDescricao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardDescricaoTexto = styled.p`
  font-size: 12px;
  color: ${(props) => (props.$selecionado ? "#f2f1ed" : "#006d5b")};
`;

export default function CardMonetario({
  valor,
  descricao,
  AoClicar,
  selecionado,
}) {
  return (
    <CardContainer onClick={AoClicar} $selecionado={selecionado}>
      <CardTitulo $selecionado={selecionado}>
        <h1>Doe:</h1>
        <h1>R$ {valor}</h1>
      </CardTitulo>
      <CardDescricao>
        <img src="/imagens/remedio.png" style={{ height: "24px" }}></img>
        <CardDescricaoTexto $selecionado={selecionado}>
          {descricao}
        </CardDescricaoTexto>
      </CardDescricao>
    </CardContainer>
  );
}
