import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import SecaoInput from "../../../../components/SecaoInput";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import TelaContainer from "../../../../components/TelaContainer";

export default function Roupa() {
  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Quantas roupas deseja doar?">
        <SecaoPergunta descricao="Agasalho:" />
        <SecaoPergunta descricao="Calça:" />
        <SecaoPergunta descricao="Camiseta:" />
        <SecaoInput descricao="Outro:"></SecaoInput>
        <SecaoBotoes caminho="/doacaoConcluida" />
      </Form>
    </TelaContainer>
  );
}
