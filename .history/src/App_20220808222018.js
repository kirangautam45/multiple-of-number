import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState();
  const {number, setumber}=useState(0)
  const multiply = ()=>{
    for (let i = 0; i < 10; i++) {
      setnumber = number * i
    }

  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data} onChange={(e)=>setData(e.target.value)} />
    
    <button onclick={multiply}>Submit</button>

    <div>
     {number}
    </div>
    </div>
  );
}

export default App;
