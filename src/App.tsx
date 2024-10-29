import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("");

  const Counter = () => {
    setCount(count + 1);
  };
  const ChangeName = () => {
    setname("hello");
  };
  return (
    <>
      <Button label={`a ${count}`} pMethod={Counter} />
      <p>{name}</p>
      <Button label="change" pMethod={ChangeName} />
    </>
  );
}

export default App;
