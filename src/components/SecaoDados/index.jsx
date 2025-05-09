import styled from "styled-components";

const TituloEstilizado = styled.h1`
  font-size: 32px;
  color: #006d5b;
`;

const DivDados = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const DadosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: 32px;
`;

export default function SecaoDados({ children, descricao = "Descrição" }) {
  return (
    <DivDados>
      <TituloEstilizado>{descricao}</TituloEstilizado>
      <DadosContainer>{children}</DadosContainer>
    </DivDados>
  );
}
