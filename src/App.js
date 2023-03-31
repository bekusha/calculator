import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (e) => {
    const value = e.target.value;
    setInput(input + value);
  };
  const handleCalculation = () => {
    setInput(eval(input).toString());
  };
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="buttons">
        <div className="buttons-row">
          <button className="number" value="7" onClick={handleButtonClick}>
            7
          </button>
          <button className="number" value="8" onClick={handleButtonClick}>
            8
          </button>
          <button className="number" value="9" onClick={handleButtonClick}>
            9
          </button>
          <button className="operation" value="+" onClick={handleButtonClick}>
            +
          </button>
        </div>
        <div className="buttons-row">
          <button className="number" value="5" onClick={handleButtonClick}>
            5
          </button>
          <button className="number" value="6" onClick={handleButtonClick}>
            6
          </button>
          <button className="number" value="7" onClick={handleButtonClick}>
            7
          </button>
          <button className="operation" value="-" onClick={handleButtonClick}>
            -
          </button>
        </div>
        <div className="buttons-row">
          <button className="number" value="5" onClick={handleButtonClick}>
            5
          </button>
          <button className="number" value="6" onClick={handleButtonClick}>
            6
          </button>
          <button className="number" value="7" onClick={handleButtonClick}>
            7
          </button>
          <button className="operation" value="*" onClick={handleButtonClick}>
            *
          </button>
        </div>
        <div className="buttons-row">
          <button className="number" value="0" onClick={handleButtonClick}>
            0
          </button>
          <button className="number" value="." onClick={handleButtonClick}>
            .
          </button>
          <button className="number" onClick={handleCalculation}>
            =
          </button>
          <button className="operation" value="/" onClick={handleButtonClick}>
            /
          </button>
        </div>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <div className="clearButton"></div>
      </div>
    </div>
  );
}

export default App;
