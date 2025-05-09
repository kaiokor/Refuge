import { useState } from "react";
import styled from "styled-components";
import { children } from "react";

const OpcaoContainer = styled.div`
  display: flex;
  width: 500px;
  gap: 32px;
  max-width: 100%;
  flex-direction: column;
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
  height: 60px;
  gap: 16px;
  align-items: center;
  background-color: #f2f1ed;
  border: 3px solid #0e5655;
  border-radius: 8px;
  padding-left: 16px;
`;
const LabelInput = styled.label`
  font-size: 16px;

  color: #0e5655;
  font-weight: bold;
`;

export default function InputRadioCard({ children, descricao = "Descricao" }) {
  const [op, setOp] = useState("");

  function Selecionar(val) {
    setOp(val);
  }

  return (
    <OpcaoContainer>
      <LabelInput>{descricao}</LabelInput>
      {children.map((filho, index) => (
        <Divisao
          key={index}
          onClick={() => Selecionar(filho["props"].children)}
        >
          <Opcao>{op === filho["props"].children && <Selecionada />}</Opcao>
          {filho}
        </Divisao>
      ))}
    </OpcaoContainer>
  );
}
