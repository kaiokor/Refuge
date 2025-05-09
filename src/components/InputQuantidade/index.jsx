import { useState } from "react";
import styled from "styled-components";

// + e - container
const InputContaier = styled.div`
  display: flex;
  border-radius: 34px;
  border: 3px solid #006d5b;
  width: 195px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  box-sizing: border-box;
  p {
    font-size: 30px;
    color: #006d5b;
    font-weight: bold;
  }
`;

// botoes + e -
const InputBotao = styled.button`
  background-color: #006d5b;
  border: none;
  color: white;
  border-radius: 34px;
  width: 40px;
  height: 40px;
  font-size: 32px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #19433f;
  }
`;

export default function InputQuantidade() {
  const [quantidade, setQuantidade] = useState(0);

  function DiminuiVal() {
    return quantidade > 0 ? setQuantidade(quantidade - 1) : quantidade;
  }

  function AumentaVal() {
    return setQuantidade(quantidade + 1);
  }

  return (
    <InputContaier>
      <InputBotao onClick={DiminuiVal}>-</InputBotao>
      <p className="inputVal">{quantidade}</p>
      <InputBotao onClick={AumentaVal}>+</InputBotao>
    </InputContaier>
  );
}
