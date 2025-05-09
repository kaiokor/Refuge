import { useState } from "react";
import CardOpcao from "../../../../components/CardOpcao/inde";
import Footer from "../../../../components/Footer";
import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import SecaoOpcao from "../../../../components/SecaoOpcao";
import TelaContainer from "../../../../components/TelaContainer";
import InputTexto from "../../../../components/inputTexto";
import SecaoBotoes from "../../../../components/SecaoBotoes";

export default function Brinquedo() {
  const [op, setOp] = useState("");
  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Quantos kg de alimento deseja doar?">
        <SecaoOpcao descricao="Quantidade kg alimento:">
          <CardOpcao opcao={op} set={setOp} valor="1kg">
            1kg
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="5kg">
            5kg
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="7kg">
            7kg
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="10kg">
            10kg
          </CardOpcao>
          <CardOpcao opcao={op} set={setOp} valor="15kg">
            15kg
          </CardOpcao>
          <InputTexto descricao="Outro:" largura="290px"></InputTexto>
        </SecaoOpcao>

        <SecaoBotoes caminho="/doacaoConcluida" />
      </Form>
    </TelaContainer>
  );
}
