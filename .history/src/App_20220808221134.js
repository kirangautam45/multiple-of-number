import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState();
  const numbers =[1,2,3,4,5,6,7,8,9,10]
  const {number, setnumber}=useState(0)
  
  
  

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data} onChange={(e)=>setData(e.target.value)} />
    
    <button onClick={}>Submit</button>

    <div>
     {numbers}
    </div>
    </div>
  );
}

export default App;
