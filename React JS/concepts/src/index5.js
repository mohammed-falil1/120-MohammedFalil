import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//currency converter using fields

class CurrencyConverter extends React.Component
{
  
  constructor()
  {
    super();
    this.handler = this.handler.bind(this);
    // this.changeHandler=this.changeHandler.bind(this);
    this.state={
      currentCurrency:"INR",
      value:0.0,
    }
  }

  ToInr()
  {
   if(this.state.currentCurrency=="DOL")
   {
     this.setState(i=>(
       {
         currentCurrency:"INR",
         value:parseFloat(i.value*80)
       }
     ))
   }
   if(this.state.currentCurrency=="YEN")
   {
     this.setState(i=>(
       {
         currentCurrency:"INR",
         value:parseFloat(i.value*40)
       }
     ))
   }

  }
  ToDol()
  {
   
    if(this.state.currentCurrency=="INR")
   {
     this.setState(i=>(
       {
         currentCurrency:"DOL",
         value:parseFloat(i.value/80)
       }
     ))
   }
   if(this.state.currentCurrency=="YEN")
   {
     this.setState(i=>(
       {
         currentCurrency:"DOL",
         value:parseFloat(i.value/30)
       }
     ))
   }

  }

  ToYen()
  {
    if(this.state.currentCurrency=="DOL")
   {
     this.setState(i=>(
       {
         currentCurrency:"YEN",
         value:parseFloat(i.value*30)
       }
     ))
   }
   if(this.state.currentCurrency=="INR")
   {
     this.setState(i=>(
       {
         currentCurrency:"YEN",
         value:parseFloat(i.value/40)
       }
     ))
   }
  }

  // changeHandler(event)
  // {
  //   this.setState(
  //     {
  //       value:event.target.value
  //     }
  //   );
  // }

  
  handler(btnId)
  {
    var val= document.getElementById("input").value;
    this.setState({
      value : val
    });
    console.log(this.state.value);
   if(btnId=="INR"){
      this.ToInr();
   }else if(btnId=="DOL"){
     this.ToDol();
   }else if(btnId=="YEN")
   {
     this.ToYen();
   }
   
  }  

  render()
  {
    return(
    <>
   <h1>{this.state.currentCurrency}: {this.state.value}</h1>
   <table>
     <tr>
   <h1>{this.state.currentCurrency} To</h1>
   </tr>
   <tr> <input  id="input" type="text" defaultValue={this.state.value}/></tr>
   </table>
   <button id="inr" onClick={()=>this.handler("INR")} onChange={this.changeHandler}>INR</button>
   <button id="dol" onClick={()=>this.handler("DOL")} onChange={this.changeHandler}>DOLLAR</button>
   <button id="yen" onClick={()=>this.handler("YEN")} onChange={this.changeHandler}>YEN</button>
    </>
    );
  }
}

ReactDOM.render(
  <CurrencyConverter />,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
