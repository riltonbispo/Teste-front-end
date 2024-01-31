import { useState } from 'react'
import Input from '../Input'
import * as S from './styles'
import Select from '../Select'
import Button from '../Button'
import { useQuery } from '@tanstack/react-query'
import { getCities, getPokemons, getRegions } from '../../services/api'

const Form = () => {
  const [selectRegion, setSelectRegion] = useState('kanto')

  const regionsQuery = useQuery({
    queryKey: ['regions'],
    queryFn: getRegions
  })

  const CitiesQuery = useQuery({
    queryKey: ['cities', selectRegion],
    queryFn: () => getCities(selectRegion)
  })

  const PokemonsQuery = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons
  })

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRegion(event.target.value)
  }

  return (
    <S.Form>
      <S.FormDivider>
        <S.FormCol>
          <Input label='Nome' placeholder='Digite seu nome' />
        </S.FormCol>
        <S.FormCol>
          <Input label='Sobrenome' placeholder='Digite seu sobrenome' />
        </S.FormCol>
      </S.FormDivider>

      <S.FormDivider>
        <S.FormCol>
          <Select label='Regiao' onChange={handleRegionChange} value={selectRegion}>
            {regionsQuery.data?.results.map((item, index) => (
              <option key={item.name + index} value={item.name}>{item.name}</option>
            ))}
          </Select>
        </S.FormCol>
        <S.FormCol>
          <Select label='Cidade'>
            {CitiesQuery.isLoading ?  <option>Loading...</option> :
              CitiesQuery.data?.locations.map((item, index) => (
                <option key={item.name + index} value={item.name}>{item.name}</option>
              ))
            }
          </Select>
        </S.FormCol>
      </S.FormDivider>

      <section>
        <S.Title>Cadastre seu time</S.Title>
        <S.SubTitle>Atendemos até 06 pokémons por vez</S.SubTitle>
        <Select label='Pokémon 01'>
          {PokemonsQuery.data?.results.map((item, index) => (
            <option key={item.name + index} value={item.name}>{item.name}</option>
          ))}
        </Select>
        <Select label='Pokémon 02'>
          {PokemonsQuery.data?.results.map((item, index) => (
            <option key={item.name + index} value={item.name}>{item.name}</option>
          ))}
        </Select>
        <Button variant='secondary'>Adicionar novo pokémon ao time... &#43;</Button>
      </section>

      <S.FormDivider>
        <S.FormCol>
          <Select label='Data para Atendimento'>
            <option value="op1">op1</option>
            <option value="op2">op2</option>
            <option value="op4">op3</option>
            <option value="op5">op4</option>
          </Select>
        </S.FormCol>
        <S.FormCol>
          <Select label='Horario de Atendimento'>
            <option value="op1">op1</option>
            <option value="op2">op2</option>
            <option value="op4">op3</option>
            <option value="op5">op4</option>
          </Select>
        </S.FormCol>
      </S.FormDivider>
    </S.Form>
  )
}

export default Form