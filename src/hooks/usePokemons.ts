import { useEffect, useState } from "react";
import { Pokemon, dtoToModel } from "../model/pokemons";
import { getPokemons } from "../api/pokemons";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message?: string; } | null>(null);

  if (error) console.error({ error });

  useEffect(() => {
    setIsLoading(true);

    getPokemons()
      .then(dtos => dtos.map(dtoToModel))
      .then(pokemons => setPokemons(pokemons))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { pokemons, isLoading, error };
};