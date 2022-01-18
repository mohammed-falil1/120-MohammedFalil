import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//currency converter using context Api

const CommonContext = React.createContext();

class Initial extends React.Component {

  

  constructor(){
    super();
   
    this.state={
      currentCurrency:"INR",
      value:0.0,
    }
  }



  render() {
    return (
      <>
        {/* <h1>{JSON.stringify(this.state)}</h1> */}
        <CommonContext.Provider
          value={this}
        >
          <CurrencyConverter />
        </CommonContext.Provider>
      </>
    );
  }
}

class CurrencyConverter extends React.Component {

  static contextType=CommonContext;

  

  ToInr() {
    if (this.context.state.currentCurrency == "DOL") {
      this.context.setState((i) => ({
        currentCurrency: "INR",
        value: parseFloat(i.value * 80),
      }));
    }
    if (this.context.state.currentCurrency == "YEN") {
      this.context.setState((i) => ({
        currentCurrency: "INR",
        value: parseFloat(i.value * 40),
      }));
    }
  }
  ToDol() {
    if (this.context.state.currentCurrency == "INR") {
      this.context.setState((i) => ({
        currentCurrency: "DOL",
        value: parseFloat(i.value / 80),
      }));
    }
    if (this.context.state.currentCurrency == "YEN") {
      this.context.setState((i) => ({
        currentCurrency: "DOL",
        value: parseFloat(i.value / 30),
      }));
    }
  }

  ToYen() {
    if (this.context.state.currentCurrency == "DOL") {
      this.context.setState((i) => ({
        currentCurrency: "YEN",
        value: parseFloat(i.value * 30),
      }));
    }
    if (this.context.state.currentCurrency == "INR") {
      this.context.setState((i) => ({
        currentCurrency: "YEN",
        value: parseFloat(i.value / 40),
      }));
    }
  }



  handler(btnId) {
    var val = document.getElementById("input").value;
    this.context.setState({
      value: val,
    });
    console.log(this.context.state.value);
    if (btnId == "INR") {
      this.ToInr();
    } else if (btnId == "DOL") {
      this.ToDol();
    } else if (btnId == "YEN") {
      this.ToYen();
    }
  }

  render() {
    return (
      <>
        <h1>
          {this.context.state.currentCurrency}: {this.context.state.value}
        </h1>
        <table>
          <tr>
            <h1>{this.context.state.currentCurrency} To</h1>
          </tr>
          <tr>
            {" "}
            <input id="input" type="text" defaultValue={this.context.state.value} />
          </tr>
        </table>
        <button
          id="inr"
          onClick={() => this.handler("INR")}
         
        >
          INR
        </button>
        <button
          id="dol"
          onClick={() => this.handler("DOL")}
          
        >
          DOLLAR
        </button>
        <button
          id="yen"
          onClick={() => this.handler("YEN")}
          
        >
          YEN
        </button>
        
        <div>
        <br></br>
        <h1>{"state :"+(this.context.state.currentCurrency)}</h1>
        </div>
      </>
    );
  }
}





ReactDOM.render(< Initial/>, document.getElementById("root"));
