import styled from "styled-components";

const ContainerTextoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextoArea = styled.textarea`
  width: 955px;
  height: 210px;
  border-radius: 8px;
  border: 3px solid #0e5655;
  background-color: #f2f1ed;
  padding: 8px;
  box-sizing: border-box;
  font-size: 20px;
  margin: auto;
  &:focus {
    outline: none;
    border: 3px solid #19433f;
  }
`;

const LabelTextArea = styled.label`
  color: #0e5655;
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  justify-content: left;
  margin-bottom: 4px;
`;

export default function InputTextoArea({ descricao }) {
  return (
    <>
      <ContainerTextoArea>
        <LabelTextArea>{descricao}</LabelTextArea>
        <TextoArea></TextoArea>;
      </ContainerTextoArea>
    </>
  );
}
