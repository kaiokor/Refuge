import Nav from "../../../../components/Nav";
import TelaContainer from "../../../../components/TelaContainer";
import InputTextoArea from "../../../../components/InputTextoArea";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import Form from "../../../../components/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Brinquedo() {
  const navegar = useNavigate();
  const [dados, setDados] = useState({
    quant: 0,
    descricao: "",
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
      <Form titulo="Quantos brinquedos deseja doar?" AoEnviar={Enviar}>
        <SecaoPergunta
          name="quant"
          value={dados.quant}
          AoMudar={handleChange}
          dados={dados}
          setDados={setDados}
          descricao="Quantidade de brinquedos:"
        ></SecaoPergunta>
        <InputTextoArea
          name="descricao"
          value={dados.descricao}
          AoMudar={handleChange}
          descricao="Descrição dos brinquedos:"
        ></InputTextoArea>
        <SecaoBotoes />
      </Form>
    </TelaContainer>
  );
}
