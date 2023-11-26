import { Link } from "react-router-dom";

const examples = [
  { url: "/examples/1", label: "Getting Ready" },
  { url: "/examples/2", label: "Hello JSX" },
  { url: "/examples/3", label: "First Component" },
  { url: "/examples/4", label: "Props" },
  { url: "/examples/5", label: "Conditional Rendering" },
  { url: "/examples/6", label: "Mapping" },
  { url: "/examples/6/zadanie", label: "Zadanie - Mapping" },
  { url: "/examples/7", label: "Event Handling" },
  { url: "/examples/8", label: "Styling" },
  { url: "/examples/9", label: "State Hook" },
  { url: "/examples/9/zadanie", label: "Zadanie - State Hook" },
  { url: "/examples/10", label: "Effect Hook" },
  { url: "/examples/11", label: "Fetch API" },
  { url: "/examples/12", label: "React Routing" },
];

export const ExamplesPage = () => {
  return (
    <main>
      <ol>
        {examples.map(({ url, label }) => (
          <li key={url}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
};
