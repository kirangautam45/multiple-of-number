import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputData, setData] = useState("");
  //const [number, setNumber] = useState([]);
  
  const multiply = () => {
    let setNumber =[]
    for (let i = 1; i <= 5; i++) {
      let result = inputData * i;
      setNumber.push(result);
      console.log(`${inputData} * ${i} = ${result}`);
      console.log(setNumber)
    }
   return setNumber
   
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
     {set}
    </div>
  );
};

export default App;
