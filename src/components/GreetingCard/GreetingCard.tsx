interface Props {
  name: string;
}

const likesAngular = (name: string) => name === "Tomasz" || name === "Stefan";

export const GreetingCard = (props: Props) => (
  <div>
    <h1>Hello there, my name is {props.name}.</h1>
    <p>
      And this is our {likesAngular(props.name) ? "Angular" : "React"}{" "}
      application ⚛️
    </p>
  </div>
);
