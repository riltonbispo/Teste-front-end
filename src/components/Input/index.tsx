import { InputHTMLAttributes, useId } from 'react'
import * as S from './styles'

type InputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label = '', type = 'text', name = '', ...props }: InputProps) => {
  const labelId = useId()
  
  return (
    <>
      <S.Label htmlFor={labelId}>{label}</S.Label>
      <S.Container>
        <S.Input id={labelId} type={type} name={name} {...props} />
      </S.Container>
    </>
  )
}

export default Input