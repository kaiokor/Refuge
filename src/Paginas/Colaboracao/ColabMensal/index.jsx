import TelaContainer from "../../../components/TelaContainer";

import Colab from "../../../components/Colab";
import Nav from "../../../components/nav";

export default function ColabMensal() {
  return (
    <TelaContainer>
      <Nav />
      <Colab rota="/dadosPessoaisMensal"></Colab>
    </TelaContainer>
  );
}
