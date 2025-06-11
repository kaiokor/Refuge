import { useContext, useEffect, useState } from "react";
import Botao from "../../components/Botao";
import Form from "../../components/Form";
import SecaoDados from "../../components/SecaoDados";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import { UsuarioContext } from "../../context/usuarioContext";
import { useNavigate } from "react-router-dom";
import CardHistorico from "../../components/CardHistorico";
import Nav from "../../components/Nav";

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

const LinhaCtn = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  font-size: 36px;
`;

const LabelStld = styled.p`
  color: #006d5b;
  font-weight: bold;
`;

const ValorStld = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;

const HistoricoCtn = styled.div``;

export default function Perfil() {
  const [historicoUsuario, setHistoricoUsuario] = useState([{ valor: "2" }]);
  const { usuario, setUsuario } = useContext(UsuarioContext);

  const navegar = useNavigate();

  useEffect(() => {
    async function ListarHistorico() {
      try {
        const resp = await fetch(
          "https://refuge-api-kdff.vercel.app/historico"
        );
        const historico = await resp.json();
        const historicoUsuario = historico.filter(
          (item) => item.usuario._id === usuario._id
        );
        setHistoricoUsuario(historicoUsuario);
      } catch (e) {
        console.log(e);
      }
    }
    ListarHistorico();
  }, []);

  function Sair() {
    navegar("/");
    setUsuario();
  }

  async function Excluir(e) {
    e.preventDefault();
    await fetch(`http://localhost:3000/usuarios/${usuario._id}`, {
      method: "DELETE",
    });
    setUsuario();
    navegar("/");
  }
  return (
    <TelaContainer>
      <Nav />
      <Form largura="1300px">
        <HeaderCtn>
          <FotoPerfilStld></FotoPerfilStld>
          <p>
            {usuario.nome} {usuario.sobrenome}
          </p>
          {usuario.premium ? (
            <p>RP:{usuario.refugeCoins}</p>
          ) : (
            <Botao onClick={() => navegar("/premium")}>Seja premium!</Botao>
          )}
        </HeaderCtn>
        <LinhaCtn>
          <LabelStld>Nome:</LabelStld>
          <ValorStld>{usuario.nome}</ValorStld>
        </LinhaCtn>
        <LinhaCtn>
          <LabelStld>Sobrenome:</LabelStld>
          <ValorStld>{usuario.sobrenome}</ValorStld>
        </LinhaCtn>
        <LinhaCtn>
          <LabelStld>Nacionalidade:</LabelStld>
          <ValorStld>{usuario.nacionalidade}</ValorStld>
        </LinhaCtn>
        <LinhaCtn>
          <LabelStld>Email:</LabelStld>
          <ValorStld>{usuario.email}</ValorStld>
        </LinhaCtn>
        <LinhaCtn>
          <LabelStld>Senha:</LabelStld>
          <ValorStld>{usuario.senha}</ValorStld>
        </LinhaCtn>
        <SecaoDados descricao="Endereço">
          <LinhaCtn>
            <LabelStld>País:</LabelStld>
            <ValorStld>{usuario.pais}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Bairro:</LabelStld>
            <ValorStld>{usuario.bairro}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Cep:</LabelStld>
            <ValorStld>{usuario.bairro}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Rua:</LabelStld>
            <ValorStld>{usuario.rua}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Estado:</LabelStld>
            <ValorStld>{usuario.estado}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Número:</LabelStld>
            <ValorStld>{usuario.numero}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Cidade:</LabelStld>
            <ValorStld>{usuario.cidade}</ValorStld>
          </LinhaCtn>
          <LinhaCtn>
            <LabelStld>Complemento:</LabelStld>
            <ValorStld>{usuario.complemento}</ValorStld>
          </LinhaCtn>
        </SecaoDados>
        <Botao onClick={Sair}>Sair</Botao>
        <Botao onClick={Excluir}>Excluir Conta</Botao>
        {/* <SecaoBotoes caminho="/editarPerfil">Editar Perfil</SecaoBotoes> */}
        <Botao onClick={() => navegar("/editarPerfil")}>Editar Perfil</Botao>
      </Form>
      <SecaoDados descricao="Histórico:">
        {historicoUsuario.map((item, i) => (
          <CardHistorico
            key={i}
            doacao={item.tipoDoacao}
            organizacao={item.org}
            valor={item.valor}
          ></CardHistorico>
        ))}
      </SecaoDados>
    </TelaContainer>
  );
}
