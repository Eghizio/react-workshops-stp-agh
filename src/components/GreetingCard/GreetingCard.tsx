import { Student } from "../../model";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => (
  <div>
    <h1>Hello there, my name is {name}.</h1>
    <p>And this is our {technology} application ⚛️</p>
  </div>
);
