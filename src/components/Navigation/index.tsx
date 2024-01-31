import React from 'react'
import logo from '../../../public/favicon.ico'
import Image from 'next/image'
import * as S from './styles'
import Button from '../Button'
import Link from 'next/link'

const Navigation = () => {
  return (
    <S.Container>
      <S.Content>
        <S.CTA>
          <Image src={logo} alt="" height={37} width={37} />
          <span>Centro Pokemon</span>
        </S.CTA>
        <S.Links>
          <li>
            <Link href="/about">
              <Button variant='ghost'>Quem Somos</Button>
            </Link>
          </li>
          <li>
            <Link href='/form'>
              <Button variant='primary'>Agendar Consulta</Button>
            </Link>
          </li>
        </S.Links>
      </S.Content>
    </S.Container>
  )
}

export default Navigation