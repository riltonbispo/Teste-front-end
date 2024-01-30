import React, { SelectHTMLAttributes } from 'react'
import * as S from './styles'

type SelectProps = {
  label: string,
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({label, ...props}: SelectProps) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Select>
        {props.children}
      </S.Select>
    </>
  )
}

export default Select