import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <>
    {enjoyers.map((enjoyer) => (
      <div key={enjoyer.name} style={style.spacer}>
        <GreetingCard student={enjoyer} />
      </div>
    ))}
  </>
);

const style = {
  spacer: {
    margin: "10px",
  },
};
