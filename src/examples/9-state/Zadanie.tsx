/*
Stwórz komponent oznaczania <Card /> jako ulubionej np. Przycisk z serduszkiem.

Po kliknięciu powinno widać zmianę wizualną w przycisku (np. wypełnienie serduszka)
W komponencie <List /> dodaj przycisk przełączający pomiędzy widokiem wszystkich <Card /> a pomiędzy widokiem polubionych <Card />
*/

import { useState } from "react";

type Id = number;

interface Item {
  id: Id;
  name: string;
  imageUrl: string;
}

const items: Item[] = [
  { id: 0, name: "Kuba", imageUrl: "https://picsum.photos/id/237/200/200" },
  { id: 1, name: "Piotrek", imageUrl: "https://picsum.photos/id/137/200/200" },
  { id: 2, name: "Emilia", imageUrl: "https://picsum.photos/id/42/200/200" },
  { id: 3, name: "Natalia", imageUrl: "https://picsum.photos/id/1/200/200" },
  { id: 4, name: "Michał", imageUrl: "https://picsum.photos/id/1/200/200" },
  { id: 5, name: "Tomasz", imageUrl: "https://picsum.photos/id/69/200/200" },
];

interface FavouriteStarProps {
  favourite: boolean;
  toggleFavourite: () => void;
}

const FavouriteStar = ({ favourite, toggleFavourite }: FavouriteStarProps) => {
  return (
    <div style={style.star} onClick={toggleFavourite} role="button">
      {favourite ? "🌟" : "⭐"}
    </div>
  );
};

interface CardProps {
  item: Item;
  isFavourite: boolean;
  toggleFavourite: () => void;
}

const Card = ({
  item: { name, imageUrl },
  isFavourite,
  toggleFavourite,
}: CardProps) => {
  return (
    <article style={style.card.container}>
      <header style={style.card.header}>
        <FavouriteStar
          favourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
        <h3>{name}</h3>
      </header>
      <img src={imageUrl} />
    </article>
  );
};

interface ListProps {
  items: Item[];
}

const List = ({ items }: ListProps) => {
  const [favourites, setFavourites] = useState<Id[]>([]); // could use Set<Id>
  const [showFavourites, setShowFavourites] = useState(false);

  const toggleFilter = () => setShowFavourites((p) => !p);

  const isFavourite = (id: Id) => favourites.includes(id);

  const toggleFavourite = (id: Id) => {
    setFavourites((favs) =>
      isFavourite(id) ? favs.filter((fid) => fid !== id) : [...favs, id]
    );
  };

  const displayedItems = showFavourites
    ? items.filter((item) => isFavourite(item.id))
    : items;

  return (
    <ul style={style.list}>
      <button onClick={toggleFilter}>
        {showFavourites ? "Show all" : "Show favourites 🌟"}
      </button>

      {displayedItems.map((item) => (
        <Card
          key={item.id}
          item={item}
          isFavourite={isFavourite(item.id)}
          toggleFavourite={() => toggleFavourite(item.id)}
        />
      ))}
    </ul>
  );
};

export const Zadanie = () => (
  <main>
    <List items={items} />
  </main>
);

const style = {
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  card: {
    container: {
      padding: "1rem",
      width: "400px",
      backgroundColor: "aqua",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      padding: "0.5rem",
      backgroundColor: "crimson",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
  },
  star: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
} as const;
