import { Button } from "@mui/joy";
import { Student } from "../../model";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const greet = () => {
    alert(`Hello there, ${name} 👋`);
  };

  return (
    <div className="p-1 border border-solid border-red-600">
      <h1 className="text-2xl font-bold">Hello there, my name is {name}.</h1>
      <p>
        And this is our {technology} application{" "}
        {technology === "React" && "⚛️"}
      </p>
      <Button onClick={greet} startDecorator={"🧡"}>
        Greet {name}
      </Button>
    </div>
  );
};
