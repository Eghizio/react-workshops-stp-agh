const users = [
  {
    name: "Kuba",
    url: "https://picsum.photos/id/237/200/200",
    isPremium: true,
  },
  {
    name: "Tomasz",
    url: "https://picsum.photos/id/69/200/200",
    isPremium: false,
  },
];

interface Props {
  name: string;
  url: string;
  isPremium: boolean;
}

const Greeting = ({ name, url, isPremium }: Props) => (
  <>
    <h1>Hello there, {name}!</h1>
    {isPremium && <img src={url} alt={`${name} avatar`} />}
  </>
);

export const App = () => {
  return (
    <div>
      <Greeting
        name={users[0].name}
        url={users[0].url}
        isPremium={users[0].isPremium}
      />
      <Greeting
        name={users[1].name}
        url={users[1].url}
        isPremium={users[1].isPremium}
      />
    </div>
  );
};
