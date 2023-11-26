import { useEffect, useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon";

interface PokemonsListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

const mapResponseToPokemonNames = (data: PokemonsListResponse) =>
  data.results.map((result) => result.name);

// Callback API
const getPokemonsCallbacks = (): Promise<PokemonsListResponse> =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log({ error }));

// Async/Await
const getPokemonsAsyncAwait = async (): Promise<PokemonsListResponse> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

// Róznica zapisu
const getPokemons =
  Math.random() > 0.5 ? getPokemonsAsyncAwait : getPokemonsCallbacks;

export const App = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);

  useEffect(() => {
    getPokemons()
      .then((data) => mapResponseToPokemonNames(data))
      .then((pokemonNames) => setPokemons(pokemonNames));
  }, []);

  return (
    <main>
      <h1>Gotta Fetch 'em All!</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </main>
  );
};
