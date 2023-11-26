export const App = () => {
  const doSomething = (name: string) => {
    const message = `Hello ${name}!`;

    if (Math.random() > 0.5) {
      console.log(message);
    } else {
      alert(message);
    }
  };

  return (
    <div>
      <button onClick={() => doSomething("Maciek")}>Pointless Button</button>

      <input
        type="text"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};
