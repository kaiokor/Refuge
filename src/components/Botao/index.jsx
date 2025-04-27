import styled from "styled-components";

const BotaoEstilizado = styled.a`
  width: 245px;
  height: 60px;
  background-color: #006d5b;
  border-radius: 32px;
  border: 2px solid #19433f;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export default function Botao({ children = "Botão", caminho = "#" }) {
  return <BotaoEstilizado href={caminho}>{children}</BotaoEstilizado>;
}
