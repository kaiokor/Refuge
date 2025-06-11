import styled from "styled-components";

const BotaoEstilizado = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) =>
    props.$corFundo !== "" ? props.$corFundo : "#006D5B"};
  border: 3px solid
    ${(props) => (props.$corLinha !== "" ? props.$corLinha : "#19433F")};
  color: ${(props) => (props.$cor !== "" ? props.$cor : "#FFF")};
  border-radius: 32px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: ${(props) => props.$marginTop};
  &:hover {
    background-color: #005a4a;
    cursor: pointer;
  }
`;

export default function Botao({
  children = "Botão",
  width = "245px",
  height = "60px",
  cor = "",
  corFundo = "",
  corLinha = "",
  type = "button",
  onClick,
  marginTop,
}) {
  return (
    <BotaoEstilizado
      type={type}
      $cor={cor}
      $corFundo={corFundo}
      $corLinha={corLinha}
      $width={width}
      $height={height}
      $marginTop={marginTop}
      style={{ textDecoration: "none" }}
      onClick={onClick}
    >
      {children}
    </BotaoEstilizado>
  );
}
