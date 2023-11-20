import { TechnologyEnjoyers } from "./components/TechnologyEnjoyers/TechnologyEnjoyers";
import { students } from "./data";

export const App = () => (
  <main>
    <TechnologyEnjoyers enjoyers={students} />
  </main>
);
