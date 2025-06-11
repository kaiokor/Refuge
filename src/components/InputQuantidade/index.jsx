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
`;

// botoes + e -
const InputBotao = styled.div`
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
  cursor: pointer;
  &:hover {
    background-color: #19433f;
  }
`;

const InputQuant = styled.input`
  font-size: 30px;
  color: #006d5b;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function InputQuantidade({
  AoMudar,
  value,
  name,
  dados,
  setDados,
}) {
  function DiminuiVal() {
    dados[name] >= 1
      ? setDados((prev) => ({ ...prev, [name]: Number(dados[name]) - 1 }))
      : dados[name];
  }

  function AumentaVal(e) {
    setDados((prev) => ({ ...prev, [name]: Number(dados[name]) + 1 }));
  }

  return (
    <InputContaier>
      <InputBotao onClick={DiminuiVal}>-</InputBotao>
      <InputQuant
        className="inputVal"
        name={name}
        value={value}
        onChange={AoMudar}
      ></InputQuant>
      <InputBotao onClick={AumentaVal}>+</InputBotao>
    </InputContaier>
  );
}
