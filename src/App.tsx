import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { pokemons } from "./data/pokemons";

// Todo:
// Render only Pokemons of "grass" type.
// State Create a component to mark a Pokemon as favourite. Use Heart or Star emoji ;).
// Bonus: Create a trigger for rendering only Favourite or All Pokemons.
// Hover on Preview to change border color using React State and React Events.
// Pagination - end task. https://pokeapi.co/docs/v2#resource-listspagination-section

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
