import { useContext } from "react";
import { OrgContext } from "../../context/OrgContext";
import styled from "styled-components";

const CardStld = styled.div`
  width: 100%;
  height: 160px;
  background-color: #f2f1ed;
  border: 5px solid #006d5b;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: bold;
    color: #006d5b;
  }
`;

export default function CardHistorico({ organizacao, valor, doacao }) {
  const { org, setOrg } = useContext(OrgContext);
  const orgDoada = org.find((item) => item.id === Number(organizacao));

  return (
    <CardStld>
      <p>Organização: {organizacao ? orgDoada.nomeBreve : ""}</p>
      <p>Tipo doação: {doacao}</p>
      <p>Valor: R${valor}</p>
    </CardStld>
  );
}
