import { useState } from "react";

interface Props {
  step?: number;
  count: number;
  updateCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ step = 1, count, updateCounter }: Props) => {
  console.log({ step });

  const increment = () => updateCounter((prev) => prev + step);

  const decrement = () => updateCounter((prev) => prev - step);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Zadanie dodatkowe: Button który zresetuje Counter do zera.
export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter step={2} count={count} updateCounter={setCount} />
      <br />
      <Counter step={8} count={count} updateCounter={setCount} />
    </>
  );
};
