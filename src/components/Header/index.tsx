import Link from 'next/link'
import * as S from './styles'

type Props = {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => {
  return (
    <S.Container>
      <S.Content>
        <span><Link href='/'>Home</Link> &gt; {title}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </S.Content>
    </S.Container>
  )
}

export default Header