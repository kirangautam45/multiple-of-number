import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState();
  const {number, setNumber}=useState(0)
  const handleChange = event =>{
    
  }
  const multiply = ()=>{
    for (let i = 0; i < 10; i++) {
      const x = data * i
      setNumber(x)
    }

  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data}  />
    
    <button onClick={multiply}>Submit</button>

    <div>
     {number}
    </div>
    </div>
  );
}

export default App;
