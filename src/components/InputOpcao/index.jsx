import styled from "styled-components";
import { children } from "react";

const ContainerInput = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

const LabelInput = styled.label`
  font-size: 16px;
  color: #0e5655;
  font-weight: bold;
`;

const InputSelectContainer = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$borderRadius};
  border: 3px solid ${(props) => props.$corBorda};
  padding: 0 8px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f1ed;
  box-sizing: border-box;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
`;

const InputOpcaoEstilizada = styled.select`
  width: 98%;
  height: 90%;
  font-size: 24px;
  color: #006d5b;
  background-color: #f2f1ed;
  font-weight: bold;
  border: none;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

export default function InputOpcao({
  children,
  bordaRedonda = "8px",
  descricao,
  width = "560px",
  height = "86px",
  corBorda = "#0e5655",
}) {
  return (
    <ContainerInput>
      {descricao && <LabelInput>{descricao}</LabelInput>}
      <InputSelectContainer
        $borderRadius={bordaRedonda}
        $width={width}
        $height={height}
        $corBorda={corBorda}
      >
        <InputOpcaoEstilizada>{children}</InputOpcaoEstilizada>
      </InputSelectContainer>
    </ContainerInput>
  );
}
