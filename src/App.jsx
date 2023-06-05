import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");

  const handleClick = (event) => setInput(input.concat(event.target.id));

  const clear = () => setInput("");

  const del = () => setInput(input.slice(0, -1));

  const calculate = () =>{
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput("Error")
    }
  }

  return (

        <div className='calculator shadow-box-shadow'>
       
          <div className='shadow-box-shadow rounded-xl'>
            <input className='text-4xl' type="text" value={input} disabled />
          </div>

          <div className='buttons pt-2'>
            <button className='operator2' onClick={clear}>AC</button>
            <button className='operator2' onClick={del}>DEL</button>

            <button id="." className='operator' onClick={handleClick}>.</button>
            <button id="/" className='operator' onClick={handleClick}>/</button>

            <button id='7' className='number' onClick={handleClick}>7</button>
            <button id='8' className='number' onClick={handleClick}>8</button>
            <button id='9' className='number' onClick={handleClick}>9</button>
            <button id='*' className='operator' onClick={handleClick}>x</button>

            <button id='4' className='number' onClick={handleClick}>4</button>
            <button id='5' className='number' onClick={handleClick}>5</button>
            <button id='6' className='number' onClick={handleClick}>6</button>
            <button id='-' className='operator' onClick={handleClick}>-</button>

            <button id='1' className='number' onClick={handleClick}>1</button>
            <button id='2' className='number' onClick={handleClick}>2</button>
            <button id='3' className='number' onClick={handleClick}>3</button>
            <button id='+' className='operator' onClick={handleClick}>+</button>

            <button id='0' className='number col-span-2' onClick={handleClick}>0</button>
            <button id="=" className='operator2 col-span-2' onClick={calculate}>=</button>

          </div>
        </div>

  )
}

export default App
