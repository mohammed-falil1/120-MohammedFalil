import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



class ToggleImg extends React.Component
{
  constructor()
  {
    super();
    this.toggleHandler = this.toggleHandler.bind(this);
    this.a=true;
  }

  toggleHandler()
  {
    this.a=!this.a;
    console.log(this.a)
    if(this.a)
    {
      document.getElementById("image").innerHTML="<img src='/static/media/imgL1.ed3a8bcf1001c4258973.jpg'></img>"
      console.log(this.image)
    }else{
      document.getElementById("image").innerHTML="<img src='/static/media/imgL2.a8a747b4b39a79a70678.jpg'></img>"
      console.log(this.image)
    }
    
   
  }  

  render()
  {
    return(
    <>
   <div id="image">

   </div>
   <div>
   <button onClick={this.toggleHandler}>button</button>
   </div>
    </>
    );
  }
}

ReactDOM.render(
  <ToggleImg />,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
