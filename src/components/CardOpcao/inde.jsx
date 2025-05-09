import styled from "styled-components";
import { children } from "react";

const ContainerOpcao = styled.button`
  width: 290px;
  height: 70px;
  font-size: 24px;
  font-weight: lighter;
  background-color: ${(props) =>
    props.$opcao === props.$valor ? "#006d5b" : "#f2f1ed"};
  border: 3px solid
    ${(props) => (props.$opcao === props.$valor ? "#19433F" : "#006d5b")};
  color: ${(props) => (props.$opcao === props.$valor ? "#f2f1ed" : "#000")};
  font-weight: ${(props) =>
    props.$opcao === props.$valor ? "bold" : "lighter"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    border: 3px solid #19433f;
    background-color: #006d5b;
    color: #f2f1ed;
    font-weight: bold;
  }
  &:active {
    cursor: pointer;
    border: 3px solid #19433f;
    background-color: #19433f;
    color: #f2f1ed;
    font-weight: bold;
  }
`;

export default function CardOpcao({ children, opcao, set, valor }) {
  function Selecionar(opc) {
    opc === opcao ? (opc = "") : opc;
    return set(opc);
  }

  return (
    <ContainerOpcao
      onClick={() => Selecionar(valor)}
      $opcao={opcao}
      $valor={valor}
    >
      {children}
    </ContainerOpcao>
  );
}
