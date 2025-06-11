import { useState } from "react";
import CardOpcao from "../../../../components/CardOpcao/inde";
import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import SecaoOpcao from "../../../../components/SecaoOpcao";
import TelaContainer from "../../../../components/TelaContainer";
import InputTexto from "../../../../components/inputTexto";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import { useNavigate } from "react-router-dom";

export default function Brinquedo() {
  const navegar = useNavigate();
  const [op, setOp] = useState("");
  const [dados, setDados] = useState({
    opcao: "",
    outro: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  }

  function Enviar(e) {
    e.preventDefault();
    navegar("/doacaoConcluida");
  }

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Quantos kg de alimento deseja doar?" AoEnviar={Enviar}>
        <SecaoOpcao descricao="Quantidade kg alimento:">
          <CardOpcao
            valor="1kg"
            campo="opcao"
            setDados={setDados}
            value="1kg"
            selecionado={op}
            setSelecionado={setOp}
          >
            1kg
          </CardOpcao>
          <CardOpcao
            campo="opcao"
            setDados={setDados}
            value="5kg"
            selecionado={op}
            setSelecionado={setOp}
            valor="5kg"
          >
            5kg
          </CardOpcao>
          <CardOpcao
            campo="opcao"
            setDados={setDados}
            value="7kg"
            selecionado={op}
            setSelecionado={setOp}
            valor="7kg"
          >
            7kg
          </CardOpcao>
          <CardOpcao
            campo="opcao"
            setDados={setDados}
            value="10kg"
            selecionado={op}
            setSelecionado={setOp}
            valor="10kg"
          >
            10kg
          </CardOpcao>
          <CardOpcao
            campo="opcao"
            setDados={setDados}
            value="15kg"
            selecionado={op}
            setSelecionado={setOp}
            valor="15kg"
          >
            15kg
          </CardOpcao>
          <InputTexto
            name="outro"
            value={dados.outro}
            descricao="Outro:"
            largura="290px"
            AoMudar={handleChange}
          ></InputTexto>
        </SecaoOpcao>

        <SecaoBotoes />
      </Form>
    </TelaContainer>
  );
}
