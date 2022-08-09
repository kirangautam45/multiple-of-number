import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const numbers =[1,2,3,4,5,6,7,8,9,10]
  const {number, setnumber}=useState(0)
const multiple=()=>{number.filter(number=>number * numb)
  
}

  return (
    <div className="App">
    <input type="text" className="form-control"  id="numb"placeholder="Enter mulpiple  of any number you want"/>
    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>

    <div>
      {mulpiple}

    </div>
    </div>
  );
}

export default App;
