import './App.css';
import { useState } from 'react';

const App() {
  const numbers =[1,2,3,4,5,6,7,8,9,10]
  const {number, setnumber}=useState(0)
const multiple=()=>{numbers.filter(number=>number * numb)
  
}

  return (
    <div className="App">
    <input type="text" className="form-control"  value={numb}placeholder="Enter multiple numbers  of any number you want"
    onChange={(e)=>setnumber(e.target.value)}/>
    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

    <div>
      {multiple}
    </div>
    </div>
  );
}

export default App;
