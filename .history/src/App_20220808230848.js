import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState('');
  
  const handleChange = event =>{
    setData(event.target.value);
  }
  let multiples =[];
  const multiply = ()=>{
   
    for (let i = 1; i <= 10; i++) {
     let  x =  data * i
     console.log(`${data} * ${i} = ${x}`);
     multiples.push(x)
    }
    return multiples
  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data}  onChange={handleChange} />
    
    <button onClick={multiply}>Submit</button>
   <div>
    { multiples}
   </div>
    </div>
    
  );
}

export default App;
