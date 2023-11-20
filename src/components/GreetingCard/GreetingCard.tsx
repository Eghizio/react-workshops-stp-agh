interface Props {
  name: string;
  technology: string;
}

export const GreetingCard = ({ name, technology }: Props) => (
  <div>
    <h1>Hello there, my name is {name}.</h1>
    <p>And this is our {technology} application ⚛️</p>
  </div>
);
