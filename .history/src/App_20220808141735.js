import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const {number, setnumber}=useState(0)
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
