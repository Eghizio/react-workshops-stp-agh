import { PokemonDto } from "../model/api";

const get = (url: string) => fetch(url)
  .then(response => response.json())
  .catch(error => console.error(error));

export const getPokemon = (pokemon: string) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then(res => res.json())
  .catch(console.error);

export const getPokemons = async (): Promise<PokemonDto[]> => {
  const pokemonsList = await get("https://pokeapi.co/api/v2/pokemon");

  const urls = pokemonsList.results.map((p: { url: string; }) => p.url);

  return Promise.all(urls.map(get));
};

export const getPokemonsPaginated = async (limit: number = 20, offset: number = 0) => {
  const pokemonsList = await get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  const urls = pokemonsList.results.map((p: { url: string; }) => p.url);

  return Promise.all(urls.map(get));
};