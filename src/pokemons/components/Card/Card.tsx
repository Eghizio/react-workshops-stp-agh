import s from "./Card.module.css";

interface Props {
  name: string;
  imageUrl: string;
}

export const Card = ({ name, imageUrl }: Props) => {
  return (
    <article className={s.card}>
      <div className={s.name}>{name}</div>
      <img className={s.preview} src={imageUrl} alt={name} />
    </article>
  );
};
