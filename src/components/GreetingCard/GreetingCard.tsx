import { Student } from "../../model";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const isReact = technology === "React";

  return (
    <div>
      <h1>Hello there, my name is {name}.</h1>
      <p>
        And this is our <span>{technology}</span> application {isReact && "⚛️"}
      </p>
      <button onClick={() => alert(`Hello there, ${name} 👋`)}>
        🧡 Greet {name}
      </button>
    </div>
  );
};
