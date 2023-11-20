import React from "react";
import { GreetingCard } from "../GreetingCard/GreetingCard";

interface Enjoyer {
  name: string;
  technology: string;
}

interface Props {
  enjoyers: Enjoyer[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <React.Fragment>
    {enjoyers.map(({ name, technology }) => (
      <GreetingCard name={name} technology={technology} />
    ))}
  </React.Fragment>
);
