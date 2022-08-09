import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputData, setData] = useState("");
  const [number, setNumber] = useState([]);
  const multiply = () => {
    for (let i = 1; i <= 5; i++) {
      let result = inputData * i;
      setNumber(result);
      console.log(`${inputData} * ${i} = ${result}`);
    }
    
  };

  return (
    <div className="App">
      <input
        type="numbers"
        placeholder="enter any number"
        value={inputData}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={multiply}>multiply</button>
      <div>{number}</div>
    </div>
  );
};

export default App;
