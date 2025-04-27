import styled from "styled-components";

const TituloEstilizado = styled.h1`
  font-size: 64px;
  color: #006d5b;
  margin: auto;
`;

export default function Titulo({ children }) {
  return <TituloEstilizado>{children}</TituloEstilizado>;
}
