import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  background-color: ${theme.primaryColor};
`;

export const Content = styled.nav`
  width: 90%;
  max-width: 1100px;
  margin-inline: auto;
  padding-block: 2rem;
  color: white;

  & span {
    font-weight: 700;
  }

  & h2 {
    font-weight: 700;
    margin-block: 0.75rem;
    font-size: 2rem;
  }
`;
