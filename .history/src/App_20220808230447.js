import './App.css';
import { useState } from 'react';

const App=()=> {
  const [data, setData] = useState('');
  let number=[]
  const handleChange = event =>{
    setData(event.target.value);
  }
  const multiply = ()=>{
    let multiples =[];
    for (let i = 1; i <= 10; i++) {
     let  x =  data * i
     console.log(`${data} * ${i} = ${x}`);
     number(x) 
    }
    return multiples
  }

  return (
    <div className="App">
    <input type="numbers" placeholder="multiple numbers  of any number"
    value={data}  onChange={handleChange} />
    
    <button onClick={multiply}>Submit</button>
   <div>
    {}
   </div>
    </div>
    
  );
}

export default App;
