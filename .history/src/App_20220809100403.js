import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputData, setData] = useState("");
  //const [number, setNumber] = useState([]);
  let setNumber =[]
  const multiply = () => {
    for (let i = 1; i <= 10; i++) {
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
        onChange={()=>{}}
      />

      <button onClick={multiply}>multiply</button>
     <div>
      {setNumber}
     </div>
    </div>
  );
};

export default App;
