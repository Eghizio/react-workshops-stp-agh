import { Student } from "../../model";
import s from "./GreetingCard.module.css";

interface Props {
  student: Student;
}

export const GreetingCard = ({ student: { name, technology } }: Props) => {
  const isReact = technology === "React";
  const techStyle = `${s.tech}${isReact ? ` ${s.react}` : ""}`;

  return (
    <div className={s.card}>
      <h1 className={s.heading}>Hello there, my name is {name}.</h1>
      <p>
        And this is our <span className={techStyle}>{technology}</span>{" "}
        application {isReact && "⚛️"}
      </p>
      <button onClick={() => alert(`Hello there, ${name} 👋`)}>
        🧡 Greet {name}
      </button>
    </div>
  );
};
