import styled from "styled-components";

const TituloEstilizado = styled.h1`
  font-size: 36px;
  color: ${(props) => (props.$cor !== "" ? `${props.$cor}` : "#006D5B")};
  margin: auto;
`;

export default function TituloQuest({ children, cor = "" }) {
  return <TituloEstilizado $cor={cor}>{children}</TituloEstilizado>;
}
