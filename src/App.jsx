import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  return (
    <>
    <Nav />
      <h1 className="text-3xl underline">Hello world!</h1>{" "}
      <p>Count: {count}</p>
      <button className="add-btn" onClick={increment}>
        Add Count
      </button>
      <button className="reset" onClick={reset}>
        Reset Count
      </button>
    </>
  );
}

export default App;
