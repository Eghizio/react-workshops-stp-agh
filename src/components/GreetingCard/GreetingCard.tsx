interface Props {
  name: string;
}

const technology = "React";

export const GreetingCard = (props: Props) => (
  <div>
    <h1>Hello there, my name is {props.name}.</h1>
    <p>And this is our {technology} application ⚛️</p>
  </div>
);
