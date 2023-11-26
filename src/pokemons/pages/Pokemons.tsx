import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { List } from "../components/List/List";
import { usePokemons } from "../hooks/usePokemons";

export const Pokemons = () => {
  const navigate = useNavigate();
  const { pokemons, isLoading, error } = usePokemons();

  const navigateToPokemonDetails = (name: string) => {
    navigate(`/details/${name}`);
  };

  if (isLoading) {
    return (
      <div className="center">
        <div className="spinner" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        {error?.message ??
          "There was an error while loading the data. Pleas try again."}
      </div>
    );
  }

  return (
    <main className="center">
      <List>
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.id}
            onClick={() => navigateToPokemonDetails(pokemon.name)}
          >
            <Card name={pokemon.name} imageUrl={pokemon.previewImageUrl} />
          </li>
        ))}
      </List>
    </main>
  );
};
