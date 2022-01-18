import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//function based component and class based component difference is -->state
//function based component are stateles
//class based component are stateful

//React Hooks
// technique to use stateful behaviour in function based components
//useState Hook
//Returns a stateful value, and a function to update it.

function MyCalculatorWithHook(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [result,setResult] = useState(0);

  const handleResult = (orp) =>{

    var ans=0;
    setNum1(num1);
    setNum2(num2);
    switch(orp)
    {
      case "+":ans=num1+num2;
              break;
      case "-":ans=num1-num2;
              break;
      case "*":ans=num1*num2;
                break;
      case "/":ans=num1/num2;
                break;
    }
    setResult(ans);
  }

  const changeHandler =(event) =>{
    var val=event.target.value;
      if(event.target.id=="num1")
      {
        setNum1(parseInt(val));
      }else{
        setNum2(parseInt(val));
      }
      

  }

  return(
    <>
    <br/>
    <table >
      <tr>
        <td>
          <p><h4>Num 1 = </h4></p>
        </td>
        <td>
          <input type="number" id="num1"  onChange={changeHandler}></input>
        </td>
        <td>
        <p><h4>Num 2 = &nbsp;</h4></p>
        </td>
        <td>
         <input type="number" id="num2" onChange={changeHandler}></input>
        </td>
        <td>
         <h1><p>&nbsp;{result}</p></h1>
        </td>
      </tr>
    </table>
    <div>
    <button onClick={()=>handleResult("+")}>+</button>
    <button onClick={()=>handleResult("-")}>-</button>
    <button onClick={()=>handleResult("*")}>*</button>
    <button onClick={()=>handleResult("/")}>/</button>
    </div>
    </>
  );

}

ReactDOM.render(  
  <MyCalculatorWithHook  /> ,
document.getElementById('root')
);