import CardMonetario from "../../../components/CardMonetario";
import Form from "../../../components/Form";
import Nav from "../../../components/nav";
import TelaContainer from "../../../components/TelaContainer";
import styled from "styled-components";
import SecaoBotoes from "../../../components/SecaoBotoes";
import { Link } from "react-router-dom";
import Colab from "../../../components/Colab";

export default function ColabUnica() {
  return (
    <TelaContainer>
      <Nav />
      <Colab rota="/dadosPessoais"></Colab>
    </TelaContainer>
  );
}
