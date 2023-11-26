import s from "./PokemonTypes.module.css";

interface Props {
  types: string[];
}

export const PokemonTypes = ({ types }: Props) => (
  <div className={s.types}>
    <h4>Types:</h4>
    {types.map((type) => (
      <span
        key={type}
        className={`${s.pill} ${s[type.toLowerCase()] ?? s.normal}`}
      >
        {type}
      </span>
    ))}
  </div>
);
