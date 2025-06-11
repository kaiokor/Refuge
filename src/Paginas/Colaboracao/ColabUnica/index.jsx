import TelaContainer from "../../../components/TelaContainer";
import { useParams } from "react-router-dom";
import Colab from "../../../components/Colab";
import Nav from "../../../components/Nav";

export default function ColabUnica() {
  const params = useParams();
  return (
    <TelaContainer>
      <Nav />
      <Colab
        dadosPessoais="dadosPessoais"
        rota={`/doacaoOrg/${params.id}/colabUnica`}
      ></Colab>
    </TelaContainer>
  );
}
