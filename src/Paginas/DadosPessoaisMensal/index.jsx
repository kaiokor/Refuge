import Nav from "../../components/nav";
import TelaContainer from "../../components/TelaContainer";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import InputOpcao from "../../components/InputOpcao";
import InputRadio from "../../components/InputRadio";
import InputRadioCard from "../../components/InputRadioCard";
import SecaoBotoes from "../../components/SecaoBotoes";
import SecaoDados from "../../components/SecaoDados";
import styled from "styled-components";

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Div2 = styled.div`
  display: flex;
  gap: 8px;
`;

export default function DadosPessoaisMensal() {
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
        </Div1>
        <SecaoDados descricao="Cartão">
          <InputTexto largura="500px" descricao="Número do cartão" />

          <InputTexto largura="500px" descricao="Código de segurança" />

          <InputTexto largura="500px" descricao="Nome impresso no cartão" />
          <InputTexto largura="500px" descricao="Parcelas" />
        </SecaoDados>
        <SecaoDados descricao="Endereço de cobrança do cartão">
          <InputTexto largura="500px" descricao="País" />
          <InputTexto largura="500px" descricao="Bairro" />
          <InputTexto largura="500px" descricao="Cep" />
          <InputTexto largura="500px" descricao="Rua" />
          <InputTexto largura="500px" descricao="Estado" />
          <InputTexto largura="500px" descricao="Número" />
          <InputTexto largura="500px" descricao="Cidade" />
          <InputTexto largura="500px" descricao="Complemento" />
        </SecaoDados>
        <SecaoBotoes caminho="/doacaoConcluida" />
      </Form>
    </TelaContainer>
  );
}
