import styled from "styled-components";
import { theme } from "../../styles/theme";


export const Container = styled.header`
  width: 100vw;
  background-color: white;
`;

export const Content = styled.nav`
  width: 90%;
  max-width: 1100px;
  padding-block: 0.8rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const CTA = styled.button`
  background-color: ${theme.primaryColor};
  border: none;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 3.125rem;

  & span {
    font-weight: 600;
    display: none;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear;
  }

  &:hover {
    width: 200px;
    
    & span {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
