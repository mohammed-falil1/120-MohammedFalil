import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Grade Calculator using input fields
class GradeCalculator extends React.Component
{
  constructor()
  {
    super();
    this.handler = this.handler.bind(this);
    this.state={
      a:0,
      b:0,
      c:0,
      grade:"",
    }
  }
  handler()
  {
    var grade;
    var a= document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    var result=((a+b+c)/300)*100;
   if(result>=90 && result<=100)
   {
     grade="A";
   }else if(result>=80 && result<90)
   {
     grade = "B";
   }else if(result>=70 && result<80)
   {
     grade="c"
   }else{
     grade="F"
   }
   this.setState(({
      a:a,
      b:b,
      grade:grade,
   }));
   console.log(grade);
   console.log(result);
  }  

  render()
  {
    return(
    <>
   <table>
     <tr>
   <h1>Grade= {this.state.grade} </h1>
   </tr>
   <tr> <input  id="a" type="text" defaultValue={this.state.a}/></tr>
   <tr> <input  id="b" type="text" defaultValue={this.state.b}/></tr>
   <tr> <input  id="c" type="text" defaultValue={this.state.c}/></tr>
   </table>
   <button id="calculate" onClick={this.handler}>calculate</button>
    </>
    );
  }
}

ReactDOM.render(
  <GradeCalculator />,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
