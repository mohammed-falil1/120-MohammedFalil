import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


//function based component and class based component difference is -->state
//function based component are stateles
//class based component are stateful

//React Hooks
// technique to use stateful behaviour in function based components
//useState Hook
//Returns a stateful value, and a function to update it.

// function MyFormWithHook(){

//   const[name,setName] = useState("");
//   const[password,setPassword]=useState("");
  

//   const handler = (event) =>{
//     if(event.target.name ==="name")
//     {
//       console.log(event.target.value);
//       setName(event.target.value);
//     }else{
//       setPassword(event.target.value);
//     } 
//   }

//   const submitHandler =()=>{
//     if(name==="falil" && password==="pass")
//     {
//       alert("login Successfull");
//     }else{
//       alert("Sorry wrong Username or Password");
//     }
  
//   }
//   return(
//    <>
      
// <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//   <li class="nav-item" >
//     <a
//       class="nav-link active"
//       id="tab-register"
//       data-mdb-toggle="pill"
//       role="tab"
//       aria-controls="pills-register"
//       aria-selected="true"
//       >Register</a>
//   </li>
// </ul>

// <div class="tab-content">
//   <div
//     class="tab-pane fade show active"
//     id="pills-login"
//     role="tabpanel"
//     aria-labelledby="tab-login" 
//   >
//     <form>
//       <div class="form-outline mb-4">
//         <label class="form-label" for="First name">Name</label>
//         <input type="text" name="name" value={name} class="form-control" onChange={handler} placeholder='First name' />
//       </div>
//       <div class="form-outline mb-4">
//       <label class="form-label" for="password">Password</label>
//         <input type="password" name="password" value={password} onChange={handler} class="form-control" placeholder='password' />
//       </div>
//       <button type="submit" class="btn btn-primary btn-block mb-4" onClick={submitHandler}>Sign Up</button>
//     </form>
//   </div>
// </div>

//      </>
//   );

// }


ReactDOM.render(  
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  ,
document.getElementById('root')
);