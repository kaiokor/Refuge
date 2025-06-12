import Nav from "../../components/Nav";
import TelaContainer from "../../components/TelaContainer";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import InputOpcao from "../../components/InputOpcao";
import InputRadio from "../../components/InputRadio";
import InputRadioCard from "../../components/InputRadioCard";
import SecaoBotoes from "../../components/SecaoBotoes";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default function DadosPessoais() {
  const navegar = useNavigate();
  const params = useParams();
  const { usuario } = useContext(UsuarioContext);
  const [novoRefugeCoins, setNovoRefugeCoins] = useState(0);
  const [dados, setDados] = useState({
    nacionalidade: "",
    fisicaJuridica: "",
    nomeCompleto: "",
    cpf: "",
    email: "",
    telefone: "",
    tipoPagamento: "",
  });

  const [dadosCompleto, setDadosCompleto] = useState({
    usuario: usuario._id,
    org: params.id,
    tipoDoacao: params.tipoColab,
    valor: params.valor,
    dadosAdicionais: { ...dados },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  }
  useEffect(() => {
    setDadosCompleto((prev) => ({ ...prev, dadosAdicionais: { ...dados } }));
    const conversao = parseFloat(params.valor.replace(",", ".")) / 10;
    setNovoRefugeCoins(parseFloat(usuario.refugeCoins) + conversao);
  }, []);

  async function Enviar(e) {
    e.preventDefault();
    await fetch("https://refuge-api.vercel.app/historico", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosCompleto),
    });
    await fetch(`https://refuge-api.vercel.app/usuarios/${usuario._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refugeCoins: novoRefugeCoins }),
    });
    // navegar("/doacaoOrg/:id/:tipoColab/:valor/dadosPessoais/pix");
    navegar("/doacaoConcluida");
  }

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Dados Pessoais" largura="1064px" AoEnviar={Enviar}>
        <Div1>
          <InputOpcao
            name="nacionalidade"
            value={dados.nacionalidade}
            AoMudar={handleChange}
            descricao="Nacionalidade"
            width="500px"
            height="60px"
          >
            <option>Brasil</option>
            <option>Hungria</option>
            <option>França</option>
          </InputOpcao>
          <InputRadio
            name="fisicaJuridica"
            value={dados.fisicaJuridica}
            AoMudar={handleChange}
          >
            <p>Pessoa Física</p>
            <p>Pessoa Jurídica</p>
          </InputRadio>
          <InputTexto
            name="nomeCompleto"
            value={dados.nomeCompleto}
            AoMudar={handleChange}
            largura="500px"
            descricao="Nome Completo:"
          ></InputTexto>
          <InputTexto
            name="cpf"
            value={dados.cpf}
            AoMudar={handleChange}
            largura="500px"
            descricao="CPF:"
          ></InputTexto>
          <InputTexto
            name="email"
            value={dados.email}
            AoMudar={handleChange}
            largura="500px"
            descricao="Email:"
          ></InputTexto>
        </Div1>
        <Div1>
          <InputTexto
            name="telefone"
            value={dados.telefone}
            AoMudar={handleChange}
            largura="500px"
            descricao="Telefone:"
          ></InputTexto>
          <InputRadioCard
            name="tipoPagamento"
            value={dados.tipoPagamento}
            AoMudar={handleChange}
          >
            <p>Pix</p>
            <p>Cartão de crédito</p>
            <p>Boleto</p>
          </InputRadioCard>
          <SecaoBotoes />
        </Div1>
      </Form>
    </TelaContainer>
  );
}
