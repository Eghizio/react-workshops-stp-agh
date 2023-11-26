/*
Zadanie:
Stwórz komponent <List /> który w środku wyświetla komponent <Card />
Komponent <Card /> powinien przyjmować dwa parametry: imię oraz url do grafiki, i je renderować.
Komponent <List /> powinien przyjmować tablicę tych samych danych co <Card /> z dodatkiem wartości typu boolean która określa czy konkretny zasób jest prywatny czy nie np. isPrivate.

Dodatkowe:
Komponent ten powinien przyjmować props który świadczy o tym czy użytkownik ma dostęp do prywatnego zasobu np. isLoggedIn.
Wyświetl wszystkie elementy zaleznie od tego czy uzytkownik ma do nich dostęp czy nie.
*/

interface User {
  name: string;
  url: string;
  isPrivate: boolean;
}

const users: User[] = [
  {
    name: "Kuba",
    url: "https://picsum.photos/id/237/200/200",
    isPrivate: true,
  },
  {
    name: "Piotrek",
    url: "https://picsum.photos/id/137/200/200",
    isPrivate: false,
  },
  {
    name: "Emilia",
    url: "https://picsum.photos/id/42/200/200",
    isPrivate: true,
  },
  {
    name: "Natalia",
    url: "https://picsum.photos/id/1/200/200",
    isPrivate: false,
  },
  {
    name: "Michał",
    url: "https://picsum.photos/id/12/200/200",
    isPrivate: true,
  },
  {
    name: "Tomasz",
    url: "https://picsum.photos/id/69/200/200",
    isPrivate: true,
  },
];

interface CardProps {
  name: string;
  url: string;
}

const Card = ({ name, url }: CardProps) => (
  <div>
    <h1>{name}</h1>
    <img src={url} alt={`${name}'s image`} />
  </div>
);

interface ListProps {
  users: User[];
  isLoggedIn?: boolean;
}

const List = ({ users, isLoggedIn = false }: ListProps) => (
  <ul>
    {users
      .filter(({ isPrivate }) => !(isPrivate && !isLoggedIn))
      .map(({ name, url }) => (
        <Card key={name} name={name} url={url} />
      ))}
  </ul>
);

export const Zadanie = () => <List users={users} isLoggedIn={false} />;
