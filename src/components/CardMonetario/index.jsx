import styled from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  height: 120px;
  border: 3px solid #006d5b;
  border-radius: 8px;
  background-color: #f2f1ed;
  padding: 16px 42px;
  box-sizing: border-box;
`;

const CardTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    color: #006d5b;
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
`;

export default function CardMonetario({ valor = "5,00" }) {
  return (
    <CardContainer>
      <CardTitulo>
        <h1>Doe:</h1>
        <h1>R$ {valor}</h1>
      </CardTitulo>
      <CardDescricao>
        <img src="/imagens/remedio.png" style={{ height: "24px" }}></img>
        <CardDescricaoTexto>
          Equivalente a 5 morfinas, ajudando a amenizar a dor de adultos feridos
        </CardDescricaoTexto>
      </CardDescricao>
    </CardContainer>
  );
}
