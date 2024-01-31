export type Regions = {
  count: number;
  next?: any;
  previous?: any;
  results: Results[];
}

type Results = {
  name: string;
  url: string;
}

export type Cities = {
  id: number;
  locations: Location[];
}

type Location = {
  name: string;
  url: string;
}

// 20240130001906
// https://pokeapi.co/api/v2/pokemon/

export type Pokemons = {
  count: number;
  results: Pokemon[];
}

export type Pokemon = {
  name: string;
  url: string;
}
