import { Link } from "react-router-dom";
import reactLogo from "../../../public/react.svg";
import s from "./Header.module.css";

interface Props {
  title: string;
}

export const Header = ({ title }: Props) => (
  <header className={s.header}>
    <img className={s.logo} src={reactLogo} alt="React logo" />
    <Link className={s.link} to="/">
      <h1 className={s.title}>{title}</h1>
    </Link>
  </header>
);
