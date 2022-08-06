import React, { useState } from 'react'
import Style from './Calculator.css'
function Calculator() {
  
    const [numArray, setNums] = useState([...Array(10).keys()].reverse())
    const [currentValues, setcurrentValues] = useState()


    function clickHandler(e) {
        if (currentValues === undefined) {
            isNaN(e.target.name) ? setcurrentValues() : setcurrentValues(currentValues => (`${e.target.name}`))
        }
        else {
            setcurrentValues(currentValues => (`${currentValues}${e.target.name}`))
        }
    }

    function calculateHandler(e) {
        !isNaN(currentValues.split('').at(-1)  )&& setcurrentValues(eval(currentValues))
    }

    function percentHandler(e){
        !isNaN(currentValues.split('').at(-1)) && setcurrentValues(eval(currentValues*.01))
    }

    return (
        <div className='calc'>
            <div className='showPanel'>{currentValues}</div>
            <div className='calc-buttons-container'>

                <div>
                    <div className='top-bar-container'>
                        <button className='c' onClick={() => setcurrentValues()} name='c'>C</button>
                        <button name='%' onClick={percentHandler}>%</button>
                    </div>

                    <div className='numpad'>
                        {numArray.map(num => {
                            return (<button
                                key={num}
                                onClick={clickHandler}
                                className={num === 0 ? "span-2" : ""}
                                name={num}>{num}</button>)
                        })}
                        <button name='.' onClick={clickHandler} >.</button>
                    </div>
                </div>

                <div className='side-bar-container'>
                    <button onClick={clickHandler} name='/'>/</button>
                    <button onClick={clickHandler} name='*'>*</button>
                    <button onClick={clickHandler} name='-'>-</button>
                    <button onClick={clickHandler} name='+'>+</button>
                    <button onClick={calculateHandler} name='='>=</button>
                </div>

            </div>

        </div>
    )
}

export default Calculator