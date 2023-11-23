import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card/Card";
// import { Header } from "../components/Header/Header";
import { List } from "../components/List/List";
import { pokemons } from "../data/pokemons";

export const Pokemons = () => {
  const navigate = useNavigate();

  const navigateToPokemonDetails = (name: string) => {
    navigate(`/details/${name}`);
  };

  return (
    <main>
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
