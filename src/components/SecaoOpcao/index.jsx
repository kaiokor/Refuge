import styled from "styled-components";

const TituloEstilizado = styled.h1`
  font-size: 32px;
  color: #006d5b;
`;

const DivPergunta = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const OpcaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: 32px;
`;

export default function SecaoOpcao({ children, descricao = "Descrição:" }) {
  return (
    <DivPergunta>
      <TituloEstilizado>{descricao}</TituloEstilizado>
      <OpcaoContainer>{children}</OpcaoContainer>
    </DivPergunta>
  );
}
