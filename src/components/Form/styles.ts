import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-bottom: 1px solid ${theme.borderColor};
  padding-bottom: 2rem;
`

export const FormDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const FormCol = styled.div`
  flex: 1;
`

export const Title = styled.span`
  color: ${theme.darkColor};
  font-size: 0.75rem;
  font-weight: 700;
`

export const SubTitle = styled.p`
  color: ${theme.grayColor};
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
`