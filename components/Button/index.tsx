import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  variant: 'primary' | 'ghost' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <>
      <S.Button variant={variant}>{props.children}</S.Button>
    </>
  )
}

export default Button