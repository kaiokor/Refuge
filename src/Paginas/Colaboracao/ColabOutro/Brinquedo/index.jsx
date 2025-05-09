import Nav from "../../../../components/nav";
import TelaContainer from "../../../../components/TelaContainer";
import InputTextoArea from "../../../../components/InputTextoArea";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import Form from "../../../../components/Form";

export default function Brinquedo() {
  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Quantos brinquedos deseja doar?">
        <SecaoPergunta descricao="Quantidade de brinquedos:"></SecaoPergunta>
        <InputTextoArea descricao="Descrição dos brinquedos:"></InputTextoArea>
        <SecaoBotoes caminho="/doacaoConcluida" />
      </Form>
    </TelaContainer>
  );
}
