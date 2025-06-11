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
import Cadastro from "./Paginas/Cadastro";
import Perfil from "./Paginas/Perfil";
import EditarPerfil from "./Paginas/Perfil/EditarPerfil";
import Premium from "./Paginas/Premium";
import RefugeCoins from "./Paginas/RefugeCoins";
import Pix from "./Paginas/Pix";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* urls q dao certo, : pode ser qualquer valor */}
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/refuge" element={<RefugeCoins />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/paginaOrg/:id" element={<PaginaOrg />} />
        <Route path="/doacaoOrg/:id" element={<DoacaoOrg />} />
        <Route
          path="doacaoOrg/:id/:tipoColab/:valor/dadosPessoais/"
          element={<DadosPessoais />}
        />
        <Route
          path="doacaoOrg/:id/:tipoColab/:valor/dadosPessoais/pix"
          element={<Pix />}
        />
        <Route
          path="doacaoOrg/:id/:tipoColab/:valor/dadosPessoaisMensal/"
          element={<DadosPessoaisMensal />}
        />

        <Route path="/doacaoOrg/:id/colabUnica" element={<ColabUnica />} />
        <Route path="/doacaoOrg/:id/colabMensal" element={<ColabMensal />} />
        <Route path="/doacaoOrg/:id/colabOutro" element={<ColabOutro />} />
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
