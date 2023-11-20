import React from "react";
import { GreetingCard } from "../GreetingCard/GreetingCard";

interface Enjoyer {
  name: string;
  technology: string;
}

interface Props {
  enjoyers: Enjoyer[];
}

export const TechnologyEnjoyers = (props: Props) => (
  <React.Fragment>
    {props.enjoyers.map((enjoyer) => (
      <GreetingCard name={enjoyer.name} technology={enjoyer.technology} />
    ))}
  </React.Fragment>
);
