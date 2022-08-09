import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState(null);
  const numbers =[1,2,3,4,5,6,7,8,9,10]
  const {number, setnumber}=useState(0)
  const multiply =


  return (
    <div className="App">
    <input type="text" placeholder="multiple numbers  of any number"
    
    />
    <button>Submit</button>

    <div>
     
    </div>
    </div>
  );
}

export default App;
