import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <>
    {enjoyers.map((enjoyer) => (
      <div key={enjoyer.name} style={{ margin: "10px" }}>
        <GreetingCard student={enjoyer} />
      </div>
    ))}
  </>
);
