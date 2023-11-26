import { Card } from "./Card/Card";

const data = [
  { name: "Kuba", url: "https://picsum.photos/id/237/200/200" },
  { name: "Piotrek", url: "https://picsum.photos/id/137/200/200" },
  { name: "Emilia", url: "https://picsum.photos/id/42/200/200" },
  { name: "Natalia", url: "https://picsum.photos/id/1/200/200" },
  { name: "Michał", url: "https://picsum.photos/id/1/200/200" },
  { name: "Tomasz", url: "https://picsum.photos/id/69/200/200" },
];

export const App = () => {
  return (
    <main>
      <ul style={style.list}>
        {data.map(({ name, url }) => (
          <Card key={name} name={name} imageUrl={url} />
        ))}
      </ul>
    </main>
  );
};

const style = {
  list: {
    listStyleType: "none",
    margin: 0,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
} as const;
