import React from 'react'
import './Cal.css'
import { useState } from 'react'
import Button from './Button' 
function Cal() {
    const [result, setResult] = useState(0);

    const handleOnClick  = () => {
        let a = Number(document.getElementById('a').value);
        let b = Number(document.getElementById('b').value);

        let op = document.querySelector('input[name="op"]:checked').value;
        switch (op) {
            case '+':
                setResult(a + b);
                break;
            case '-':
                setResult(a - b);
                break;
            case '*':
                setResult(a * b);
                break;
            case '/':
                setResult(a / b);
                break;
        }
        document.getElementById('result').value = result;
        document.getElementById('result').value = 1;
    }

  return (
    <div className='cal'>
        <div className="input">
            <input type="text" name="a" id="a" />
            <input type="text" name="b" id="b" />
        </div>    
        
        <div className="">
            <input type='radio' value='+' id='+' name='op'></input>
            <label htmlFor="+">+</label>
            <input type='radio' value='-' id='-' name='op'></input>
            <label htmlFor="-">-</label>
            <input type='radio' value='*' id='*' name='op'></input>
            <label htmlFor="*">*</label>
            <input type='radio' value='/' id='/' name='op'></input>
            <label htmlFor="/">/</label>
        </div>

        <Button type='submit' onClick={handleOnClick} text='Calc' />

        
        <div className="result">
            <input type="text" name="result" id="result" disabled  value={result}/>
        </div>
    </div>
  )
}

export default Cal
