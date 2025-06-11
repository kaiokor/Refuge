import { useContext, useEffect, useState } from "react";
import Form from "../../components/Form";
import Nav from "../../components/nav";
import SecaoInput from "../../components/SecaoInput";
import SecaoPergunta from "../../components/SecaoPergunta";
import TelaContainer from "../../components/TelaContainer";
import styled from "styled-components";
import { UsuarioContext } from "../../context/usuarioContext";
import SecaoBotoes from "../../components/SecaoBotoes";
import { useNavigate } from "react-router-dom";

export default function RefugeCoins() {
  const { usuario } = useContext(UsuarioContext);
  const [quantRfgC, setQuantRfgC] = useState();

  const [erro, setErro] = useState();
  const navegar = useNavigate();

  function handleChange(e) {
    setQuantRfgC(e.target.value);
  }

  function Envio(e) {
    e.preventDefault();
    setErro();
    if (quantRfgC > usuario.refugeCoins) {
      setErro("Valor acima da quantidade de Refuge Coins que você tem!");
    } else {
      const RfgCAtualizado =
        parseFloat(usuario.refugeCoins) - parseFloat(quantRfgC);
      const resp = fetch(`http://localhost:3000/usuarios/${usuario._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refugeCoins: RfgCAtualizado }),
      });
      navegar("/doacaoConcluida");
    }
  }

  return (
    <TelaContainer>
      <Nav />
      <Form titulo="Doação com Refuge Coins" AoEnviar={Envio}>
        <SecaoInput
          descricao="Quantidade de refuge:"
          inputQuant={false}
          refugeCoins={usuario.refugeCoins}
          AoMudar={handleChange}
          value={quantRfgC}
          erro={erro}
        ></SecaoInput>
        <SecaoBotoes></SecaoBotoes>
      </Form>
    </TelaContainer>
  );
}
