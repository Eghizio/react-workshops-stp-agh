import { Link } from "react-router-dom";

interface Props {
  message?: string;
}

export const NotFound = ({ message }: Props) => (
  <main className="center">
    <h2>This page does not exist.</h2>

    {message && <p>{message}</p>}

    <Link to="/">Go home</Link>
  </main>
);
