import { useContext, useState } from "react";
import Form from "../../../components/Form";
import InputOpcao from "../../../components/InputOpcao";
import InputTexto from "../../../components/inputTexto";
import Nav from "../../../components/Nav";
import SecaoBotoes from "../../../components/SecaoBotoes";
import SecaoDados from "../../../components/SecaoDados";
import TelaContainer from "../../../components/TelaContainer";
import styled from "styled-components";
import { UsuarioContext } from "../../../context/usuarioContext";
import { useNavigate } from "react-router-dom";

const FotoPerfilStld = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 120px;
  background-color: gray;
`;

const HeaderCtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p {
    font-size: 48px;
    color: #006d5b;
    font-weight: bold;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export default function EditarPerfil() {
  const navegar = useNavigate();
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [user, setUser] = useState({
    ...usuario,
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  async function Envio(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/usuarios/${usuario._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const updated = await res.json();
      console.log("Atualização feita com sucesso", updated);
      navegar("/perfil");
    } catch (e) {
      console.error(e);
    }

    try {
      const res = await fetch(`http://localhost:3000/usuarios/${usuario._id}`);
      const dados = await res.json();
      setUsuario(dados);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Cadastro" largura="1064px" AoEnviar={Envio}>
        <HeaderCtn>
          <FotoPerfilStld></FotoPerfilStld>
        </HeaderCtn>

        <Div1>
          <InputTexto
            largura="500px"
            descricao="Nome:"
            name="nome"
            value={user.nome}
            AoMudar={handleChange}
          ></InputTexto>
          <InputOpcao
            AoMudar={handleChange}
            descricao="Nacionalidade"
            name="nacionalidade"
            width="500px"
            height="60px"
          >
            <option>{user.nacionalidade}</option>
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
        <SecaoBotoes caminho="/">Salvar</SecaoBotoes>
      </Form>
    </TelaContainer>
  );
}
