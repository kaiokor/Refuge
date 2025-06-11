import TelaContainer from "../../components/TelaContainer";
import Form from "../../components/Form";
import InputTexto from "../../components/inputTexto";
import InputOpcao from "../../components/InputOpcao";
import InputRadio from "../../components/InputRadio";
import InputRadioCard from "../../components/InputRadioCard";
import SecaoBotoes from "../../components/SecaoBotoes";
import SecaoDados from "../../components/SecaoDados";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../../components/Nav";

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function DadosPessoaisMensal() {
  const navegar = useNavigate();
  const [dados, setDados] = useState({
    nacionalidade: "",
    fisicaJuridica: "",
    nomeCompleto: "",
    cpf: "",
    email: "",
    telefone: "",
    tipoPagamento: "",
    numCartao: "",
    codgSeguranca: "",
    nomeCartao: "",
    parcelas: "",
    pais: "",
    bairro: "",
    cep: "",
    rua: "",
    estado: "",
    numero: "",
    cidade: "",
    complemento: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  }

  const Enviar = () => {
    navegar("/doacaoConcluida");
  };
  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Dados Pessoais" largura="1064px" AoEnviar={Enviar}>
        <Div1>
          <InputOpcao
            name="nacionalidade"
            value={dados.nacionalidade}
            descricao="Nacionalidade"
            width="500px"
            height="60px"
            AoMudar={handleChange}
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
        </Div1>
        <SecaoDados descricao="Cartão">
          <InputTexto
            name="numCartao"
            value={dados.numCartao}
            AoMudar={handleChange}
            largura="500px"
            descricao="Número do cartão"
          />

          <InputTexto
            name="codgSeguranca"
            value={dados.codgSeguranca}
            AoMudar={handleChange}
            largura="500px"
            descricao="Código de segurança"
          />

          <InputTexto
            name="nomeCartao"
            value={dados.nomeCartao}
            AoMudar={handleChange}
            largura="500px"
            descricao="Nome impresso no cartão"
          />
          <InputTexto
            name="parcelas"
            value={dados.parcelas}
            AoMudar={handleChange}
            largura="500px"
            descricao="Parcelas"
          />
        </SecaoDados>
        <SecaoDados descricao="Endereço de cobrança do cartão">
          <InputTexto
            name="pais"
            value={dados.pais}
            AoMudar={handleChange}
            largura="500px"
            descricao="País"
          />
          <InputTexto
            name="bairro"
            value={dados.bairro}
            AoMudar={handleChange}
            largura="500px"
            descricao="Bairro"
          />
          <InputTexto
            name="cep"
            value={dados.cep}
            AoMudar={handleChange}
            largura="500px"
            descricao="Cep"
          />

          <InputTexto
            name="rua"
            value={dados.rua}
            AoMudar={handleChange}
            largura="500px"
            descricao="Rua"
          />
          <InputTexto
            name="estado"
            value={dados.estado}
            AoMudar={handleChange}
            largura="500px"
            descricao="Estado"
          />
          <InputTexto
            name="numero"
            value={dados.numero}
            AoMudar={handleChange}
            largura="500px"
            descricao="Número"
          />
          <InputTexto
            name="cidade"
            value={dados.cidade}
            AoMudar={handleChange}
            largura="500px"
            descricao="Cidade"
          />
          <InputTexto
            name="complemento"
            value={dados.complemento}
            AoMudar={handleChange}
            largura="500px"
            descricao="Complemento"
          />
        </SecaoDados>
        <SecaoBotoes />
      </Form>
    </TelaContainer>
  );
}
