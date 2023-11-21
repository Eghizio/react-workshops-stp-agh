import { Student } from "../../model";
import "./style.css";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const greet = () => {
    alert(`Hello there, ${name} 👋`);
  };

  return (
    <div className="card spacer">
      <h1>Hello there, my name is {name}.</h1>
      <p>
        And this is our {technology} application{" "}
        {technology === "React" && "⚛️"}
      </p>
      <button onClick={greet}>Greet {name}</button>
    </div>
  );
};
