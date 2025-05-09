import styled from "styled-components";

const ContainerInput = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
const LabelInput = styled.label`
  font-size: 16px;
  color: ${(props) => props.$corTexto};
  font-weight: bold;
`;

const InputEstilizado = styled.input`
  font-size: 24px;
  color: #006d5b;
  width: ${(props) => props.$largura};
  height: 60px;
  background-color: #f2f1ed;
  border: 3px solid #0e5655;
  border-radius: 8px;
  padding-left: 16px;
  box-sizing: border-box;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  &:focus {
    outline: none;
  }
`;

export default function InputTexto({
  descricao = "Descrição Input",
  largura = "665px",
  cor = "#0e5655",
}) {
  return (
    <ContainerInput>
      <LabelInput $corTexto={cor}>{descricao}</LabelInput>
      <InputEstilizado $largura={largura}></InputEstilizado>
    </ContainerInput>
  );
}
