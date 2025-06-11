import Form from "../../../../components/Form";
import InputTexto from "../../../../components/inputTexto";
import Nav from "../../../../components/Nav";
import SecaoDados from "../../../../components/SecaoDados";
import TelaContainer from "../../../../components/TelaContainer";
import SecaoBotoes from "../../../../components/SecaoBotoes";
import InputOpcao from "../../../../components/InputOpcao";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrabVoluntario() {
  const navegar = useNavigate();
  const [dados, setDados] = useState({
    nacionalidade: "",
    telefone: "",
    nomeCompleto: "",
    email: "",
    cpf: "",
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
      <Form
        largura="1064px"
        titulo="Envie uma solicitação para trabalho voluntário"
        AoEnviar={Enviar}
      >
        <SecaoDados descricao="Dados Pessoais">
          <InputOpcao
            AoMudar={handleChange}
            name="nacionalidade"
            value={dados.nacionalidade}
            edescricao="Nacionalidade"
            width="500px"
            height="60px"
          >
            <option>Brasil</option>
            <option>Angola</option>
            <option>USA</option>
          </InputOpcao>
          <InputTexto
            AoMudar={handleChange}
            name="telefone"
            value={dados.telefone}
            edescricao="Telefone:"
            largura="500px"
          ></InputTexto>
          <InputTexto
            AoMudar={handleChange}
            name="nomeCompleto"
            value={dados.nomeCompleto}
            edescricao="Nome Completo"
            largura="500px"
          ></InputTexto>
          <InputTexto
            AoMudar={handleChange}
            name="email"
            value={dados.email}
            edescricao="E-mail:"
            largura="500px"
          ></InputTexto>
          <InputTexto
            AoMudar={handleChange}
            name="cpf"
            value={dados.cpf}
            edescricao="CPF"
            largura="500px"
          ></InputTexto>

          <SecaoBotoes caminho="/doacaoConcluida" />
        </SecaoDados>
      </Form>
    </TelaContainer>
  );
}
