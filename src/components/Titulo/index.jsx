import styled from "styled-components";

const TituloEstilizado = styled.h1`
  font-size: 64px;
  color: ${(props) => (props.$cor !== "" ? `${props.$cor}` : "#006D5B")};
  margin: auto;
`;

export default function Titulo({ children, cor = "" }) {
  return <TituloEstilizado $cor={cor}>{children}</TituloEstilizado>;
}
