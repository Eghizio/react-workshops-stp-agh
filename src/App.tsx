import { TechnologyEnjoyers } from "./components/TechnologyEnjoyers/TechnologyEnjoyers";
import { Student } from "./model";

const students: Student[] = [
  { name: "Kuba", technology: "React" },
  { name: "Piotrek", technology: "React" },
  { name: "Tomasz", technology: "Angular" },
  { name: "Stefan", technology: "Angular" },
  { name: "Ada", technology: "React" },
  { name: "Magda", technology: "React" },
  { name: "Zuza", technology: "Angular" },
];

export const App = () => (
  <main>
    <TechnologyEnjoyers enjoyers={students} />
  </main>
);
