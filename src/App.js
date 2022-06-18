import { useState } from 'react';
import './App.css';

function App() {

  const [result,setResult] = useState("")

  function handleEvent(e){
    setResult(result.concat(e.target.name))
  }
  function clear(){
    setResult("")
  }

  function backspace(){
    setResult(result.slice(0,-1))
  }

  function calculate(){
    try{
    setResult(eval(result))
  }
  catch(error){
    setResult("ERROR")
  }
  }
  
  return (
    
    <div className="App">
      <div className='container'>
        <div className='display'>
          <input className='inp' type="text" value={result}/>
        </div>
        <div className='operator'>
          <button name="/" onClick={handleEvent}>&divide;</button>
          <button name="*" onClick={handleEvent}>&times;</button>
          <button name="-" onClick={handleEvent}>-</button>
          <button name="+" onClick={handleEvent}>+</button>
          <button name='DEL' onClick={backspace} >DEL</button>
          <button name="AC" onClick={clear}>AC</button>
        </div>
        <div className='digits'>
          
          <button name="7" onClick={handleEvent}>7</button>
          <button name="8" onClick={handleEvent}>8</button>
          <button name="9" onClick={handleEvent}>9</button>
          <button name="4" onClick={handleEvent}>4</button>
          <button name="5" onClick={handleEvent}>5</button>
          <button name="6" onClick={handleEvent}>6</button>
          <button name="1" onClick={handleEvent}>1</button>
          <button name="2" onClick={handleEvent}>2</button>
          <button name="3" onClick={handleEvent}>3</button>
          <button name="0" onClick={handleEvent}>0</button>
          <button name="." onClick={handleEvent}>.</button>
          <button name="=" onClick={calculate}>=</button>

        </div>

      </div>
    </div>
  );
}

export default App;
