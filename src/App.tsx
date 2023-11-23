import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { pokemons } from "./data/pokemons";

export const App = () => (
  <main>
    <Header title="React Pokemons" />
    <List>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Card name={pokemon.name} imageUrl={pokemon.previewImageUrl} />
        </li>
      ))}
    </List>
  </main>
);
