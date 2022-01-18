import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Calculator  using fields
class Calculator extends React.Component
{
  constructor()
  {
    super();
    this.handler = this.handler.bind(this);
    // this.changeHandler=this.changeHandler.bind(this);
    this.state={
      a:0,
      b:0,
      orp:'',
      ans:0,
    }
  }
  handler(orp)
  {
    //orp=+ or - or * or /
    var ans;
    var a= document.getElementById("a").value;
    var b=document.getElementById("b").value;
    a=parseInt(a);
    //a=5
    b=parseInt(b);
    //b=4
    switch(orp)
    {
      case "+":ans=a+b;
              break;
      case "-":ans=a-b;
              break;
      case "*":ans=a*b;
                break;
      case "/":ans=a/b;
                break;
    }
   this.setState(({
      a:a,
      b:b,
      ans:ans,
      orp:orp
   }));
  }  

  render()
  {
    return(
    <>
   <table>
     <tr>
   <h1>{this.state.a} {this.state.orp} {this.state.b} = {this.state.ans} </h1>
   </tr>
   <tr> <input  id="a" type="text" defaultValue={this.state.a}/></tr>
   <tr> <input  id="b" type="text" defaultValue={this.state.b}/></tr>
   </table>
   <button onClick={()=>this.handler("+")} >+</button>
   <button  onClick={()=>this.handler("-")} >-</button>
   <button  onClick={()=>this.handler("*")} >*</button>
   <button  onClick={()=>this.handler("/")}  >/</button>
    </>
    );
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
