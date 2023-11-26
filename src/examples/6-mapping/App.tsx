const users = [
  { name: "Kuba", url: "https://picsum.photos/id/237/200/200" },
  { name: "Piotrek", url: "https://picsum.photos/id/137/200/200" },
  { name: "Emilia", url: "https://picsum.photos/id/42/200/200" },
  { name: "Natalia", url: "https://picsum.photos/id/1/200/200" },
  { name: "Michał", url: "https://picsum.photos/id/12/200/200" },
  { name: "Tomasz", url: "https://picsum.photos/id/69/200/200" },
];

interface Props {
  name: string;
  url: string;
}

const Card = ({ name, url }: Props) => (
  <>
    <h1>Hello there, {name}!</h1>
    <img src={url} alt={`${name} avatar`} />
  </>
);

export const App = () => {
  return (
    <>
      {users.map(({ name, url }) => (
        <Card key={name} name={name} url={url} />
      ))}
      {/* {users.map((user) => (
        <Card {...user} />
      ))} */}
    </>
  );
};
