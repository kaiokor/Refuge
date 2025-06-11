import { useState } from "react";
import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import SecaoInput from "../../../../components/SecaoInput";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import TelaContainer from "../../../../components/TelaContainer";
import { useNavigate } from "react-router-dom";

export default function Roupa() {
  const navegar = useNavigate();
  const [dados, setDados] = useState({
    quantAgasalho: 0,
    quantCalca: 0,
    quantCamiseta: 0,
    outro: "",
    quantOutro: 0,
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
      <Form titulo="Quantas roupas deseja doar?" AoEnviar={Enviar}>
        <SecaoPergunta
          AoMudar={handleChange}
          name="quantAgasalho"
          dados={dados}
          setDados={setDados}
          value={dados.quantAgasalho}
          descricao="Agasalho:"
        />
        <SecaoPergunta
          AoMudar={handleChange}
          dados={dados}
          setDados={setDados}
          name="quantCalca"
          value={dados.quantCalca}
          descricao="Calça:"
        />
        <SecaoPergunta
          AoMudar={handleChange}
          dados={dados}
          setDados={setDados}
          name="quantCamiseta"
          value={dados.quantCamiseta}
          descricao="Camiseta:"
        />
        <SecaoInput
          AoMudar={handleChange}
          dados={dados}
          setDados={setDados}
          name="quantOutro"
          nameTexto="outro"
          value={dados.quantOutro}
          valueTexto={dados.outro}
          descricao="Outro:"
        ></SecaoInput>
        <SecaoBotoes />
      </Form>
    </TelaContainer>
  );
}
