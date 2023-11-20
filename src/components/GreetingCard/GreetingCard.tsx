interface Props {
  name: string;
}

export const GreetingCard = (props: Props) => (
  <div>
    <h1>Hello there, my name is {props.name}.</h1>
    <p>And this is my React application ⚛️</p>
  </div>
);
