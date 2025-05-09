import Nav from "../../components/nav";
import TelaContainer from "../../components/TelaContainer";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import InputOpcao from "../../components/InputOpcao";
import InputRadio from "../../components/InputRadio";
import InputRadioCard from "../../components/InputRadioCard";
import SecaoBotoes from "../../components/SecaoBotoes";
import styled from "styled-components";

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default function DadosPessoais() {
  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Dados Pessoais" largura="1064px">
        <Div1>
          <InputOpcao descricao="Nacionalidade" width="500px" height="60px">
            <option>Brasil</option>
            <option>Hungria</option>
            <option>França</option>
          </InputOpcao>
          <InputRadio>
            <p>Pessoa Física</p>
            <p>Pessoa Jurídica</p>
          </InputRadio>
          <InputTexto largura="500px" descricao="Nome Completo:"></InputTexto>
          <InputTexto largura="500px" descricao="CPF:"></InputTexto>
          <InputTexto largura="500px" descricao="Email:"></InputTexto>
        </Div1>
        <Div1>
          <InputTexto largura="500px" descricao="Telefone:"></InputTexto>
          <InputRadioCard>
            <p>Pix</p>
            <p>Cartão de crédito</p>
            <p>Boleto</p>
          </InputRadioCard>
          <SecaoBotoes caminho="/doacaoConcluida" />
        </Div1>
      </Form>
    </TelaContainer>
  );
}
