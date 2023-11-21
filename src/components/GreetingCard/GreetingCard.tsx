import { Button } from "@mui/joy";
import { Student } from "../../model";
import styled from "styled-components";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const greet = () => {
    alert(`Hello there, ${name} 👋`);
  };

  return (
    <div className="p-1 border border-solid border-red-600">
      <Heading>Hello there, my name is {name}.</Heading>
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

const Heading = styled.h1`
  font-size: xx-large;
  font-weight: bold;
`;
