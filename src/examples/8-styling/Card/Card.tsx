import s from "./Card.module.css"; // CSS Modules

interface Props {
  name: string;
  imageUrl: string;
}

export const Card = ({ name, imageUrl }: Props) => {
  return (
    <article className={s.card}>
      <span className={s.name}>{name}</span>
      <img className={s.image} src={imageUrl} alt="Avatar" />
    </article>
  );
};
