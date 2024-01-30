import axios from "axios";
import { Cities, Pokemons, Regions } from "../types/resultApi";

export const getRegions = async (): Promise<Regions> => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/region/`
  );

  return result.data;
};

export const getCities = async (region:string): Promise<Cities>=> {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/region/${region}`
  );

  return result.data;
}

export const getPokemons = async (): Promise<Pokemons> => {
  const result = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/`
  );

  return result.data;
};