const Greeting = () => (
  <>
    <h1>Hello there, Kuba!</h1>
    <img
      src="https://static.wikia.nocookie.net/ca89c528-0c48-4c6c-bcfc-163963b3427d/scale-to-width/370"
      alt="General Kenobi"
    />
  </>
);

export const App = () => {
  return (
    <main>
      <Greeting />
      {/* <Greeting /> */}
    </main>
  );
};
