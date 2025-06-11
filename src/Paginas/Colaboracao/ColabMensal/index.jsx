import TelaContainer from "../../../components/TelaContainer";
import Colab from "../../../components/Colab";
import Nav from "../../../components/Nav";
import { useParams } from "react-router-dom";

export default function ColabMensal() {
  const params = useParams();

  return (
    <TelaContainer>
      <Nav />
      <Colab
        dadosPessoais="dadosPessoaisMensal "
        rota={`/doacaoOrg/${params.id}/colabMensal`}
      ></Colab>
    </TelaContainer>
  );
}
