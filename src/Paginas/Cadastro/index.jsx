import styled from "styled-components";
import Form from "../../components/Form";
import Nav from "../../components/Nav";
import TelaContainer from "../../components/TelaContainer";
import InputOpcao from "../../components/InputOpcao";
import InputTexto from "../../components/inputTexto";
import SecaoDados from "../../components/SecaoDados";
import Botao from "../../components/Botao";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default function Cadastro() {
  const navegar = useNavigate();
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    nacionalidade: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    pais: "",
    bairro: "",
    cep: "",
    rua: "",
    estado: "",
    numero: "",
    cidade: "",
    complemento: "",
  });

  async function Cadastrar(e) {
    e.preventDefault();
    const resp = await fetch("https://refuge-api.vercel.app/usuarios/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (!resp.ok) throw new Error("Falha ao cadastrar usuário");
    navegar("/login");
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Cadastro" largura="1064px" AoEnviar={Cadastrar}>
        <Div1>
          <InputTexto
            largura="500px"
            descricao="Nome:"
            name="nome"
            value={user.nome}
            AoMudar={handleChange}
          ></InputTexto>
          <InputOpcao
            descricao="Nacionalidade"
            width="500px"
            height="60px"
            name="nacionalidade"
            value={user.nacionalidade}
            AoMudar={handleChange}
          >
            <option></option>
            <option>Brasil</option>
            <option>Hungria</option>
            <option>França</option>
          </InputOpcao>
          <InputTexto
            largura="500px"
            descricao="CPF:"
            name="cpf"
            value={user.cpf}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            type="password"
            descricao="Senha:"
            name="senha"
            value={user.senha}
            AoMudar={handleChange}
          ></InputTexto>
        </Div1>
        <Div1>
          <InputTexto
            largura="500px"
            descricao="Sobrenome:"
            name="sobrenome"
            value={user.sobrenome}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Telefone:"
            name="telefone"
            value={user.telefone}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Email:"
            name="email"
            value={user.email}
            AoMudar={handleChange}
          ></InputTexto>
        </Div1>
        <SecaoDados descricao="Endereço">
          <InputTexto
            largura="500px"
            descricao="Pais:"
            name="pais"
            value={user.pais}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Bairro:"
            name="bairro"
            value={user.bairro}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="CEP:"
            name="cep"
            value={user.cep}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Rua:"
            name="rua"
            value={user.rua}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Estado:"
            name="estado"
            value={user.estado}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Número:"
            name="numero"
            value={user.numero}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            largura="500px"
            descricao="Cidade:"
            name="cidade"
            value={user.cidade}
            AoMudar={handleChange}
          ></InputTexto>
          <InputTexto
            AoMudar={handleChange}
            largura="500px"
            descricao="Complemento:"
            name="complemento"
            value={user.complemento}
          ></InputTexto>
        </SecaoDados>
        <Botao type="submit">Enviar</Botao>
        {/* <SecaoBotoes caminho="#">Cadastrar</SecaoBotoes> */}
      </Form>
    </TelaContainer>
  );
}
