import Form from "../../../../components/Form";
import InputTexto from "../../../../components/inputTexto";
import Nav from "../../../../components/nav";
import SecaoDados from "../../../../components/SecaoDados";
import TelaContainer from "../../../../components/TelaContainer";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import InputOpcao from "../../../../components/InputOpcao";

export default function TrabVoluntario() {
  return (
    <TelaContainer>
      <Nav />
      <Form
        largura="1064px"
        titulo="Envie uma solicitação para trabalho voluntário"
      >
        <SecaoDados descricao="Dados Pessoais">
          <InputOpcao descricao="Nacionalidade" width="500px" height="60px">
            <option>Brasil</option>
            <option>Angola</option>
            <option>USA</option>
          </InputOpcao>
          <InputTexto descricao="Telefone:" largura="500px"></InputTexto>
          <InputTexto descricao="Nome Completo" largura="500px"></InputTexto>
          <InputTexto descricao="E-mail:" largura="500px"></InputTexto>
          <InputTexto descricao="CPF" largura="500px"></InputTexto>

          <SecaoBotoes caminho="/doacaoConcluida" />
        </SecaoDados>
      </Form>
    </TelaContainer>
  );
}
