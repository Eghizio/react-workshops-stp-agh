import { Link, Outlet } from "react-router-dom";
import reactLogo from "../../../public/react.svg";
import s from "./Layout.module.css";

interface Props {
  title: string;
}

export const Layout = ({ title }: Props) => (
  <>
    <header className={s.header}>
      <div className={s.nav}>
        <img className={s.logo} src={reactLogo} alt="React logo" />
        <Link className={s.link} to="/">
          <h1 className={s.title}>{title}</h1>
        </Link>
      </div>

      <nav className={s.nav}>
        <Link to="/">Resources</Link>
        <Link to="/examples">Examples</Link>
        <Link to="/pokemons">Pokemons</Link>
      </nav>
    </header>
    <div className={s.layout}>
      <Outlet />
    </div>
  </>
);
