import { useEffect, useState } from "react";
import { Pokemon, dtoToModel } from "../../model/pokemons";
import { NotFound } from "../../pages/NotFound";
import { getPokemon } from "../../api/pokemons";

interface Props {
  name: string;
}

export const PokemonDetails = ({ name }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPokemon(name)
      .then(dtoToModel)
      .then(setPokemon)
      .finally(() => setIsLoading(false));
  }, [name]);

  if (pokemon === null) {
    return isLoading ? (
      <div className="spinner" />
    ) : (
      <NotFound message={`Could not find Pokemon with name "${name}".`} />
    );
  }

  return (
    <article>
      <h2>{pokemon.name} details</h2>
    </article>
  );
};
