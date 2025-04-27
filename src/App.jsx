import Banner from "./components/Banner";
import BannerDoacao from "./components/BannerDoacao";
import BannerEstatistica from "./components/BannerEstatistica";
import EstilosGlobais from "./components/EstilosGlobais";
import Nav from "./components/nav";
import styled from "styled-components";

const TelaContainer = styled.div`
  max-width: 1920px;
  height: 1080px;
  margin: 0 auto;
`;

function App() {
  return (
    <TelaContainer>
      <EstilosGlobais></EstilosGlobais>
      <Nav></Nav>
      <Banner />
      <BannerEstatistica />
      <BannerDoacao />
    </TelaContainer>
  );
}

export default App;
