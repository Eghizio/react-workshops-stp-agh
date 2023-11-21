import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";
import s from "./TechnologyEnjoyers.module.css";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <>
    {enjoyers.map((enjoyer) => (
      <div key={enjoyer.name} className={s.spacer}>
        <GreetingCard student={enjoyer} />
      </div>
    ))}
  </>
);
