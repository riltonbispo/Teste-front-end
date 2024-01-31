import React from 'react'
import Form from '../../components/Form'
import * as S from './styles'
import Header from '../../components/Header'

const page = () => {
  return (
    <div>
      <Header title='Agendar Consulta' subtitle='Recupere seus pokémons em 5 segundos' />
      <S.Title>Preencha o formulário abaixo para agendar sua consulta</S.Title>
      <S.Container>
        <Form />
      </S.Container>
    </div>
  )
}
export default page