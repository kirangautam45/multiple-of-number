import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputData, setData] = useState("");

  const [number, setNumber] = useState([]);

  const multiply = () => {
    let array = [];
    for (let i = 1; i <= 10; i++) {
      let result = inputData * i;
      array = [...array, result];
      console.log("==========> inside", array);
    }
    console.log("=========>outside", array);
    setNumber(array);
  };

  console.log(number);

  return (
    <div className="App">
      <input
        type="numbers"
        placeholder="enter any number"
        value={inputData}
        onChange={}
      />

      <button onClick={multiply}>multiply</button>
      <div>
        <ol>
          {number.map((subItems, index) => {
            return (
              <div>
                {inputData}*{index+1}={subItems}
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
