import Form from "../../../../components/Form";
import Nav from "../../../../components/nav";
import TelaContainer from "../../../../components/TelaContainer";
import SecaoPergunta from "../../../../components/SecaoPergunta";
import SecaoOpcao from "../../../../components/SecaoOpcao";
import CardOpcao from "../../../../components/CardOpcao/inde";
import InputTextoArea from "../../../../components/InputTextoArea";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Livro() {
  const navegar = useNavigate();
  const [selecionado, setSelecionado] = useState("");
  const [dados, setDados] = useState({
    quantLivros: 0,
    tipoLivro: "",
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
      <Form titulo="Quantos livros deseja doar?" AoEnviar={Enviar}>
        <SecaoPergunta
          AoMudar={handleChange}
          dados={dados}
          setDados={setDados}
          name="quantLivros"
          value={dados.quantLivros}
          descricao="Quantidade de livros"
        ></SecaoPergunta>
        <SecaoOpcao>
          <CardOpcao
            dados={dados}
            setDados={setDados}
            setSelecionado={setSelecionado}
            selecionado={selecionado}
            campo="tipoLivro"
            value="Novo"
          >
            Novo
          </CardOpcao>
          <CardOpcao
            dados={dados}
            setDados={setDados}
            setSelecionado={setSelecionado}
            selecionado={selecionado}
            campo="tipoLivro"
            value="Semi-Novo"
          >
            Semi-Novo
          </CardOpcao>
          <CardOpcao
            dados={dados}
            setDados={setDados}
            setSelecionado={setSelecionado}
            selecionado={selecionado}
            campo="tipoLivro"
            value="Usado"
          >
            Usado
          </CardOpcao>
        </SecaoOpcao>
        <InputTextoArea
          AoMudar={handleChange}
          name="descricao"
          value={dados.descricao}
          descricao="Descricação dos livros"
        ></InputTextoArea>
        <SecaoBotoes />
      </Form>
    </TelaContainer>
  );
}
