import styled from "styled-components";

const CardContainer = styled.div`
  width: 570px;
  height: 121px;
  display: flex;
  flex-direction: column;
  background-color: #f2f1ed;
  border-radius: 8px;
  border: 3px solid #006d5b;
  padding: 22px 50px;
  box-sizing: border-box;
  gap: 8px;
  h1 {
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: #006d5b;
  }
  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: lighter;
  }
`;

export default function CardDoacao({ titulo, subtitulo }) {
  return (
    <CardContainer>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </CardContainer>
  );
}
