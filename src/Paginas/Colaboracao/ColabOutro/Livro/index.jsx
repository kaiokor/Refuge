import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import TelaContainer from "../../../../components/TelaContainer";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import SecaoOpcao from "../../../../components/SecaoOpcao";
import CardOpcao from "../../../../components/CardOpcao/inde";
import InputTextoArea from "../../../../components/InputTextoArea";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import { useState } from "react";

export default function Livro() {
  const [op, setOp] = useState("");

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Quantos livros deseja doar?">
        <SecaoPergunta descricao="Quantidade de livros"></SecaoPergunta>
        <SecaoOpcao>
          <CardOpcao opcao={op} set={setOp} valor="Novo">
            Novo
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="Semi-Novo">
            Semi-Novo
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="Usado">
            Usado
          </CardOpcao>
        </SecaoOpcao>
        <InputTextoArea descricao="Descricação dos livros"></InputTextoArea>
        <SecaoBotoes caminho="/doacaoConcluida" />
      </Form>
    </TelaContainer>
  );
}
