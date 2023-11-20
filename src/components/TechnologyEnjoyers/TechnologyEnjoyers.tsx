import React from "react";
import { GreetingCard } from "../GreetingCard/GreetingCard";
import { Student } from "../../model";

interface Props {
  enjoyers: Student[];
}

export const TechnologyEnjoyers = ({ enjoyers }: Props) => (
  <React.Fragment>
    {enjoyers.map((enjoyer) => (
      <GreetingCard key={enjoyer.name} student={enjoyer} />
    ))}
  </React.Fragment>
);
