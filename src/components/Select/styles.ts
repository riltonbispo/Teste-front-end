import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Select = styled.select`
  width: 100%;
  padding: 1em;
  background-color: #fff;
  border-color: ${theme.borderColor};
  border-radius: 0.5rem;
  color: ${theme.grayColor};
  font-size: 0.875rem;
`
export const Label = styled.label`
  color: ${theme.darkColor};
  font-size: 0.75rem;
  font-weight: 700;
`