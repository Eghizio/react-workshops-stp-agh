interface Props {
  name: string;
  technology: string;
}

export const GreetingCard = (props: Props) => (
  <div>
    <h1>Hello there, my name is {props.name}.</h1>
    <p>And this is our {props.technology} application ⚛️</p>
  </div>
);
