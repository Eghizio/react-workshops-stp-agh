import { Button } from "@mui/joy";
import { Student } from "../../model";
import styled from "styled-components";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const isReact = technology === "React";

  return (
    <div className="p-1 border border-solid border-red-600">
      <Heading>Hello there, my name is {name}.</Heading>
      <p>
        And this is our <Tech $isReact={isReact}>{technology}</Tech> application{" "}
        {isReact && "⚛️"}
      </p>
      <Button
        onClick={() => alert(`Hello there, ${name} 👋`)}
        startDecorator={"🧡"}
      >
        Greet {name}
      </Button>
    </div>
  );
};

const Heading = styled.h1`
  font-size: xx-large;
  font-weight: bold;
`;

interface TechProps {
  $isReact: boolean;
}

const Tech = styled.span<TechProps>`
  color: ${(props) => (props.$isReact ? "dodgerblue" : "crimson")};
`;
