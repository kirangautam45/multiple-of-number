import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState('');
  const {number, setNumber}=useState('')
  const handleChange = event =>{
    setData(event.target.value);
  }
  const multiply = ()=>{
    for (let i = 0; i < 10; i++) {
      const x = data * i
      return(x)
    }

  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data}  onChange={handleChange} />
    
    <button onClick={multiply}>Submit</button>

    <div>
     {multiply}
    </div>
    </div>
  );
}

export default App;
