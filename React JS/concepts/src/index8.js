import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Grade Calculator using input fields
function MyBorder(props){
  return(
    <div id={props.id}  className={'MyBorder MyBorder-'+ props.color}>
      {props.children}
    </div>
  );
}


class Border extends React.Component
{
  constructor()
  {
    super();
    this.hoverEnter=this.hoverEnter.bind(this);
    this.hoverLeave=this.hoverLeave.bind(this);
  }

  hoverEnter(id)
  {
    
      document.getElementById(id).style.background=id;
   
  }

  hoverLeave(id)
  {
    
      document.getElementById(id).style.background="none";
   
  }  

  render()
  {
    return(
    //  <div onMouseEnter={this.hover}>
    <>
        <div onMouseEnter={()=>this.hoverEnter("green")} onMouseLeave={()=>this.hoverLeave("green")}>
      <MyBorder color="green" id="green" >
       <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
       </div>
        <div  onMouseEnter={()=>this.hoverEnter("red")} onMouseLeave={()=>this.hoverLeave("red")}>
       <MyBorder color="red" id="red">
         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
        <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
       </div>
        <div  onMouseEnter={()=>this.hoverEnter("blue")} onMouseLeave={()=>this.hoverLeave("blue")} >
       <MyBorder color="blue" id="blue">
         <h1 className='MyDialog-title'>Welcome to First Dialog Box.</h1>
         <p className='MyDialog-message'>This is content from First Dialog Box.</p>
       </MyBorder>
     </div>
     </>
    );
  }


}


ReactDOM.render(  
  <Border /> ,
document.getElementById('root')
);
////////////////////////////////////////////////////////////////






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
