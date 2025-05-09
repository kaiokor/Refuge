import styled from "styled-components";
import EstilosGlobais from "../EstilosGlobais";

const LayoutContainer = styled.div`
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default function TelaContainer({ children }) {
  return (
    <LayoutContainer>
      <EstilosGlobais />
      {children}
    </LayoutContainer>
  );
}
