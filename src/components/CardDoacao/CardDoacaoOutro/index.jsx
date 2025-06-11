import styled from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  height: 120px;
  border-radius: 8px;
  border: 3px solid #006d5b;
  color: #006d5b;
  background-color: #f2f1ed;
  font-size: ${(props) => props.$tamanho}px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 3px solid #19433f;
    color: #f2f1ed;
    background-color: #006d5b;
  }
`;

export default function CardDoacaoOutro({ children, tamanhoTexto = 48 }) {
  return <CardContainer $tamanho={tamanhoTexto}>{children}</CardContainer>;
}
