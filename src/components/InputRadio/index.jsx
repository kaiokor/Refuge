import { useState } from "react";
import styled from "styled-components";

const OpcaoContainer = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
  }
`;
const Opcao = styled.div`
  width: 35px;
  height: 35px;
  border: 4px solid #0e5655;
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
`;

const Selecionada = styled.div`
  width: 22px;
  height: 22px;
  background-color: #0e5655;
  border-radius: 120px;
  cursor: pointer;
`;

const Divisao = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export default function InputRadio({ children }) {
  const [op, setOp] = useState("");

  function Selecionar(val) {
    setOp(val);
  }

  return (
    <OpcaoContainer>
      {children.map((filho, index) => (
        <Divisao key={index}>
          <Opcao onClick={() => Selecionar(filho["props"].children)}>
            {op === filho["props"].children && <Selecionada />}
          </Opcao>
          {filho}
        </Divisao>
      ))}
    </OpcaoContainer>
  );
}
