import styled from "styled-components";
import Botao from "../Botao";
import { Link, useNavigate } from "react-router-dom";

const ContainerBotoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  gap: 27px;
`;

export default function SecaoBotoes({
  caminho = "/",
  tamanhoBotoes = "231px",
}) {
  const navegar = useNavigate();
  return (
    <ContainerBotoes>
      <Link onClick={() => navegar(-1)} style={{ textDecoration: "none" }}>
        <Botao
          width={tamanhoBotoes}
          cor="rgba(0,0,0,0.5)"
          corFundo="none"
          corLinha=" rgba(0,0,0,0.5)"
        >
          Voltar
        </Botao>
      </Link>
      <Link to={caminho} style={{ textDecoration: "none" }}>
        <Botao type="submit" width={tamanhoBotoes}>
          Doar
        </Botao>
      </Link>
    </ContainerBotoes>
  );
}
