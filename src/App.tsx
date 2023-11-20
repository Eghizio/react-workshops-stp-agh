import { GreetingCard } from "./components/GreetingCard/GreetingCard";

const names = ["Kuba", "Piotrek", "Tomasz", "Stefan", "Ada", "Magda", "Zuza"];

export const App = () => (
  <main>
    {names.map((name) => (
      <GreetingCard name={name} />
    ))}
  </main>
);
