import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Addition(props)
// {
//   let result =parseInt(props.a)+parseInt(props.b);
//   return <h1>Addition of {props.a} and {props.b} is {result}</h1>
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Addition a="10" b="20" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function Calc(props)
// {
//   let a = parseInt(props.a);
//   let b= parseInt(props.b);
//   var operator={

//     "+":function (a,b){return a+b},
//     "-":function (a,b){return a-b},
//     "*":function (a,b){return a*b},
//     "/":function (a,b){return a/b},

//   };
  
//   return <>
//   <h1>Addition of {a} and {b} is {operator[props.add](a,b)}</h1>
//   <h1>Subtraction of {a} and {b} is {operator[props.sub](a,b)}</h1>
//   <h1>Multiplication of {a} and {b} is {operator[props.mul](a,b)}</h1>
//   <h1>Division of {a} and {b} is {operator[props.div](a,b)}</h1>
//   </>

  
// }
// ReactDOM.render(
    
//       <Calc a="10" b="20" add="+" sub="-" mul="*" div="/" />
//      ,
//     document.getElementById('root')
//   );


// Create a grading component which is accepting 3 subject marks

function Grading(props)
{
  let a = parseInt(props.a);
  let b= parseInt(props.b);
  let c= parseInt(props.c);
  let result=((a+b+c)/300)*100;
  let grade;
  if(result>=90 && result<=100)
    {
      grade ="A"
    }
  else if(result>=80 && result<90)
    {
      grade= "B";
    }
  else if(result>=70 && result<=80)
    {
      grade =  "C";
    }
    return <h1>Grade is {grade}</h1>

}
ReactDOM.render(
        <Grading a="90" b="90" c="90" />
       ,
      document.getElementById('root')
    );
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
