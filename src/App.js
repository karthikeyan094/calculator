import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handleCalc(e) {
    let op = e.target.innerText;
    if (op === "C") {
      setCalc("");
      setShowResult(false);
    } else if (op === "=") {
      setShowResult(true);
      if (!calc) {
        setResult("Error");
        return;
      }
      setResult(eval(calc).toString());
      setShowResult(true);
    } else {
      setCalc((prev) => prev + op);
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="text"
        value={calc}
        onChange={(e) => setCalc(e.target.value)}
      />{" "}
      <br /> <br />
      <div style={{ fontSize: "30px", color: "#ccc" }}>
        {showResult && <div>{result}</div>}
      </div>{" "}
      <br />
      <div
        className="gContainer"
        onClick={(e) => {
          handleCalc(e);
        }}
      >
        <div>
          <button>7</button>
        </div>
        <div>
          <button>8</button>
        </div>
        <div>
          <button>9</button>
        </div>
        <div>
          <button>+</button>
        </div>
        <div>
          <button>4</button>
        </div>
        <div>
          <button>5</button>
        </div>
        <div>
          <button>6</button>
        </div>
        <div>
          <button>-</button>
        </div>
        <div>
          <button>1</button>
        </div>
        <div>
          <button>2</button>
        </div>
        <div>
          <button>3</button>
        </div>
        <div>
          <button>*</button>
        </div>
        <div>
          <button>C</button>
        </div>
        <div>
          <button>0</button>
        </div>
        <div>
          <button>=</button>
        </div>
        <div>
          <button>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
