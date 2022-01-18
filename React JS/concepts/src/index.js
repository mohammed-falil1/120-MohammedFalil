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
  constructor(props)
  {
    super(props);
    this.state = {
      a : parseInt(props.a),
      b : parseInt(props.b),
      result:0,
      msg:""
    };
    this.AddHandler = this.AddHandler.bind(this);
    this.SubHandler = this.SubHandler.bind(this);
    this.MulHandler = this.MulHandler.bind(this);
    this.divHandler = this.divHandler.bind(this);
  }

  AddHandler()
  {

    this.setState(i =>(
      {result:i.a+i.b,
       msg: "ADD = "}
    ));
    

  }
  SubHandler()
  {
    this.setState(i =>(
      {result : i.a-i.b,
        msg: "SUB = "}
    ));

    
  }

  MulHandler()
  {
    this.setState(i=>(
      {result : i.a*i.b,
        msg: "MUL = "}
    ));
   
  }

  divHandler()
  {
    this.setState(i=>(
      {result : i.a/i.b,
        msg: "DIV = "}
    ));
    
  }

  render()
  {
    return(<>
     <h1>{this.state.msg}={this.state.result}</h1>
      <button onClick={this.AddHandler}>Add</button>
    <button onClick={this.SubHandler}>Subtract</button> 
   <button onClick={this.MulHandler}>Multiply</button>
    <button onClick={this.divHandler}>Division</button>
    
    </>
    );
  }
}

ReactDOM.render(
  <Calculator a="20" b="10"/>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
