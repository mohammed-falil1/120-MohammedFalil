import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';




export default function SignIn(){

    const[name,setName] = useState("");
    const[password,setPassword]=useState("");
    const[isCorrect,setIsCorrect]=useState("Hidden");
    const navigate = useNavigate();
  
    const handler = (event) =>{
      if(event.target.name ==="name")
      {
        console.log(event.target.value);
        setName(event.target.value);
      }else{
        setPassword(event.target.value);
      } 
    }
  
    const submitHandler =(event)=>{
      if(name==="falil" && password==="pass")
      {
       console.log("Login successful");
       navigate("/home");
      }else{
        event.preventDefault();
        document.getElementById("label").innerHTML=" <label style='color:red;' >Wrong userName or Password</label>"
        setIsCorrect("show");
        console.log(isCorrect)
      }
    
    }
    return(
     <>
        
  <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li class="nav-item" >
      <a
        class="nav-link active"
        id="tab-register"
        data-mdb-toggle="pill"
        role="tab"
        aria-controls="pills-register"
        aria-selected="true"
        >Register</a>
    </li>
  </ul>
  
  <div class="tab-content">
    <div
      class="tab-pane fade show active"
      id="pills-login"
      role="tabpanel"
      aria-labelledby="tab-login" 
    >
      <form>
        <div class="form-outline mb-4">
          <label class="form-label" for="First name">Name</label>
          <input type="text" name="name" value={name} class="form-control" onChange={handler} placeholder='First name' />
        </div>
        <div class="form-outline mb-4">
        <label class="form-label" for="password">Password</label>
          <input type="password" name="password" value={password} onChange={handler} class="form-control" placeholder='password' />
        </div>
        <div id="label">
       
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={submitHandler}>Sign Up</button>
      </form>
    </div>
  </div>
  
       </>
    );
  
  }

