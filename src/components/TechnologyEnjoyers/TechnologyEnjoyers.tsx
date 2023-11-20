import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <>
    {enjoyers.map((enjoyer) => (
      <div style={{ margin: "10px" }}>
        <GreetingCard key={enjoyer.name} student={enjoyer} />
      </div>
    ))}
  </>
);
