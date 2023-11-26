import { useEffect, useState } from "react";

// Zadanie dodatkowe: Naciśnięcie klawisza "Space" stopuje/startuje licznik.
// Wykorzystaj addEventListener. Pamiętaj o posprzątaniu ;)
const Countdown = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((c) => (c > 0 ? --c : 0));
      console.log("1000ms has passed");
    }, 1000);

    // Cleanup function run on component unmounting.
    return () => {
      // Comment line below & notice what happens when unmounting the <Countdown /> component
      clearInterval(interval);
      console.log("Unmounting!");
    };
  }, []);

  return <div>Time remaining: {countdown}</div>;
};

export const App = () => {
  const [isCountdownMounted, setIsCountdownMounted] = useState(true);

  const btnText = isCountdownMounted ? "Unmount countdown" : "Mount countdown";

  const toggle = () => setIsCountdownMounted((p) => !p);

  return (
    <main>
      <button onClick={toggle}>{btnText}</button>

      {isCountdownMounted && <Countdown />}
    </main>
  );
};
