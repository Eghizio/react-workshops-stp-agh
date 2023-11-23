import { useEffect, useState } from "react";
import { Pokemon, dtoToModel } from "../../model/pokemons";
import { NotFound } from "../../pages/NotFound";
import { getPokemon } from "../../api/pokemons";
import { exampleDescription } from "../../data/description";
import { PokemonTypes } from "./PokemonTypes/PokemonTypes";
import s from "./PokemonDetails.module.css";
import { Gallery } from "./Gallery/Gallery";

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

  if (isLoading) return <div className="spinner" />;

  if (pokemon === null) {
    return <NotFound message={`Could not find Pokemon with name "${name}".`} />;
  }

  return (
    <article className={s.details}>
      <div className={s.info}>
        <div>
          <h2 className={s.name}>{pokemon.name}</h2>
          <img
            className={s.previewImage}
            src={pokemon.previewImageUrl}
            alt={pokemon.name}
          />
        </div>
        <div className={s.description}>
          <h3>Description</h3>
          <p>{exampleDescription}</p>
          <PokemonTypes types={pokemon.types} />
          <Gallery imageUrls={pokemon.imageUrls} />
        </div>
      </div>
    </article>
  );
};
