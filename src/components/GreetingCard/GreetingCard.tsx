import { Student } from "../../model";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const greet = () => {
    alert(`Hello there, ${name} 👋`);
  };

  return (
    <div style={style.card}>
      <h1>Hello there, my name is {name}.</h1>
      <p>
        And this is our {technology} application{" "}
        {technology === "React" && "⚛️"}
      </p>
      <button onClick={greet}>Greet {name}</button>
    </div>
  );
};

const style = {
  card: {
    border: "1px solid red",
    padding: "5px",
  },
};
