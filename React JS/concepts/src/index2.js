import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*One type of getting calculator.*/
/*________________________________*/
// class Calculator extends React.Component
// {
//   constructor(props)
//   {
//     super(props);
//     this.a=parseInt(this.props.a);
//     this.b= parseInt(this.props.b);
//   }
//   render()
//   {
//     return <><h1>Addition = {this.a+this.b}</h1>
//             <h1> Subtraction = {this.a-this.b}</h1>
//             <h1>Multiplication = {this.a*this.b}</h1>
//             <h1>Division = {this.a/this.b}</h1>
//     </>
//   }
// }

// ReactDOM.render(
//     <Calculator a="20" b="10" />,
//   document.getElementById("root")
// );



class Calculator extends React.Component
{
  constructor()
  {
    super();
    this.a=parseInt("20");
    this.b=parseInt("10");
  }

  render()
  {
    return <>
    <h1>Addition = {this.a+this.b}</h1>
    <h1>Subtraction = {this.a-this.b}</h1>
    <h1>Multiplication = {this.a*this.b}</h1>
    <h1>Division = {this.a/this.b}</h1>
    
    </>
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
