import styled from "styled-components";
import Titulo from "../../components/Titulo";
import InputOpcao from "../InputOpcao";

const PesquisaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0;
  gap: 64px;
`;

// titulo do banner
const TextoPesquisa = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: column;
  gap: 16px;
  h1 {
    font-size: 84px;
  }
`;

// deixa os dois inputs na mesma linha
const FormularioContainer = styled.form`
  display: flex;
  gap: 32px;
`;

// linha ao redor do input
const InputTextoContainer = styled.div`
  width: 530px;
  height: 80px;
  border-radius: 120px;
  border: 3px solid #006d5b;
  padding: 0 8px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f1ed;
`;

// o input em si
const InputTexto = styled.input`
  font-size: 24px;
  color: #006d5b;
  font-weight: bold;
  border: none;
  width: 80%;
  height: 90%;
  border: none;
  background-color: #f2f1ed;
  &:focus {
    outline: none;
  }
`;

// Botao de pesquisa do input
const BotaoPesquisar = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 120px;
  background-color: #006d5b;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
`;

export default function BannerPesquisa() {
  return (
    <PesquisaContainer>
      <TextoPesquisa>
        <Titulo>Encontre projetos por todo o país</Titulo>
        <FormularioContainer>
          <InputOpcao bordaRedonda="120px" corBorda="#006d5b">
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Bahia">Bahia</option>
            <option value="Paraná">Paraná</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="Ceará">Ceará</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Pará">Pará</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Goiás">Goiás</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Acre">Acre</option>
            <option value="Amapá">Amapá</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Piauí">Piauí</option>
            <option value="Tocantins">Tocantins</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Sergipe">Sergipe</option>
          </InputOpcao>

          <InputTextoContainer>
            <InputTexto type="text" placeholder="Digite aqui"></InputTexto>
            <BotaoPesquisar>
              <img src="/imagens/pesquisa.png" />
            </BotaoPesquisar>
          </InputTextoContainer>
        </FormularioContainer>
      </TextoPesquisa>
      <img src="/imagens/plantas.png"></img>
    </PesquisaContainer>
  );
}
