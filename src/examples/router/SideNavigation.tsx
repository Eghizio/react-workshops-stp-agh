import { ReactNode } from "react";
import { Link } from "react-router-dom";
import s from "./Examples.module.css";
import { navigation } from "./navigation";

export const SideNavigation = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.layout}>
      <nav className={s.nav}>
        {navigation.map(({ url, title }) => (
          <Link key={url} to={url}>
            {title}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
};
