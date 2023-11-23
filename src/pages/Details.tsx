import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import { PokemonDetails } from "../components/PokemonDetails/PokemonDetails";

export const Details = () => {
  const { name } = useParams();

  if (name === undefined)
    return <NotFound message={`Please provide a name.`} />;

  return <PokemonDetails name={name} />;
};
