import { darken } from "polished";

import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { ButtonProps } from "./index";

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: transparent;
  padding: 0.8rem 1.5rem;
  border-radius: 1.875rem;
  font-size: 0.875rem;

  &:hover{
    background-color: ${darken(0.08, 'white')}
  }

  ${(props) => props.variant == 'primary' && css`
    background-color: ${theme.primaryColor};
    color: white;
    font-weight: 700;

    &:hover{
      background-color: ${darken(0.08, theme.primaryColor)}
    }
  `}

  ${(props) => props.variant == 'secondary' && css`
    font-weight: 700;
    border: 1px solid ${theme.darkColor};
  `}
` 