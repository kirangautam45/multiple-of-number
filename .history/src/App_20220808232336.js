import './App.css';
import { useState } from 'react';

const App=()=> {
  const [inputData, setData] = useState('');
  const [number , setnumber]= useState('')
  const handleChange = event =>{
    setData(event.target.value);
  }
  let multiples =[];
  const multiply = ()=>{
   
    for (let i = 1; i <= 10; i++) {
     let  result =  inputData * i
     console.log(`${inputData} * ${i} = ${result}`);
     setnumber(result)
    }
    return setnumber
  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers of any number"
    value={inputData}  onChange={handleChange} />
    
    <button onClick={multiply}>Submit</button>
   <div>
    {number.map(function(e){
      e.
    })}
   </div>
    </div>
    
  );
}

export default App;
