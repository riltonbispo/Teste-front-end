import {lighten} from 'polished'
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding: 0.8rem;
  background-color: white;
  border: 1px solid ${theme.borderColor};
  border-radius: 0.5rem;

  &:focus-within{
    border-color: ${theme.primaryColor};
    outline: 3px solid ${lighten(0.35, theme.primaryColor)};
  }
`

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;

  &:focus{
    outline: none;
  }

  &::placeholder{
    color: ${theme.grayColor};
  }
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
`