import styled from "styled-components";
import { children } from "react";
import Titulo from "../Titulo";

const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 64px;
`;

const FormEstilizado = styled.form`
  width: ${(props) => props.$largura};
  margin: 64px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 32px;
`;

export default function Form({ children, titulo, largura = "955px" }) {
  const AoMudar = (evento) => {
    evento.preventDefault();
  };

  return (
    <>
      <ContainerTitulo>
        <Titulo>{titulo}</Titulo>
      </ContainerTitulo>
      <FormEstilizado onSubmit={AoMudar} $largura={largura}>
        {children}
      </FormEstilizado>
      ;
    </>
  );
}
