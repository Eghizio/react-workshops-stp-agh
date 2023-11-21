import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <>
    {enjoyers.map((enjoyer) => (
      <div key={enjoyer.name} className="m-2.5">
        <GreetingCard student={enjoyer} />
      </div>
    ))}
  </>
);
