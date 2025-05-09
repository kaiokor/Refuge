import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Login from "./Paginas/Login";
import Pesquisa from "./Paginas/Pesquisa";
import PaginaOrg from "./Paginas/PaginaOrg";
import DoacaoOrg from "./Paginas/DoacaoOrg";
import ColabMensal from "./Paginas/Colaboracao/ColabMensal";
import ColabUnica from "./Paginas/Colaboracao/ColabUnica";
import ColabOutro from "./Paginas/Colaboracao/ColabOutro";
import Brinquedo from "./Paginas/Colaboracao/ColabOutro/Brinquedo";
import Roupa from "./Paginas/Colaboracao/ColabOutro/Roupa";
import Livro from "./Paginas/Colaboracao/ColabOutro/Livro";
import Comida from "./Paginas/Colaboracao/ColabOutro/Comida";
import TrabVoluntario from "./Paginas/Colaboracao/ColabOutro/TrabVoluntario";
import DadosPessoais from "./Paginas/DadosPessoais";
import DadosPessoaisMensal from "./Paginas/DadosPessoaisMensal";
import DoacaoConcluida from "./Paginas/DoacaoConcluida";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/paginaOrg" element={<PaginaOrg />} />
        <Route path="/doacaoOrg" element={<DoacaoOrg />} />
        <Route path="/dadosPessoais" element={<DadosPessoais />} />
        <Route path="/dadosPessoaisMensal" element={<DadosPessoaisMensal />} />

        <Route path="/doacaoOrg/colabUnica" element={<ColabUnica />} />
        <Route path="/doacaoOrg/colabMensal" element={<ColabMensal />} />
        <Route path="/doacaoOrg/colabOutro" element={<ColabOutro />} />

        <Route path="/doacaoOrg/colabOutro/Brinquedo" element={<Brinquedo />} />
        <Route path="/doacaoOrg/colabOutro/Roupa" element={<Roupa />} />
        <Route path="/doacaoOrg/colabOutro/Livro" element={<Livro />} />
        <Route path="/doacaoOrg/colabOutro/Comida" element={<Comida />} />
        <Route
          path="/doacaoOrg/colabOutro/TrabVoluntario"
          element={<TrabVoluntario />}
        />

        <Route path="/doacaoConcluida" element={<DoacaoConcluida />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
