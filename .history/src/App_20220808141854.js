import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const numbers =[1,2,3,4,5,6,7,8,9,10]
  const {number, setnumber}=useState(0)
const multiple=()=>{
  return numbers.map((n)=>{
    return (
      <div key={n}>
        <input type="checkbox" value={n} onChange={()=>setnumber(n)} />
        <label>{n}
}

  return (
    <div className="App">
    <input type="text" className="form-control" placeholder="Enter mulpiple  of any number you want"/>
    <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
    <div>

    </div>
    </div>
  );
}

export default App;
