import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Grade Calculator using input fields



class MyForm extends React.Component
{
  constructor()
  {
    super();
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:"",
      dob:"",
      gender:""
    };
    this.handler=this.handler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
  }

  handler(event)
  {
    const value =event.target.value;
    const name =event.target.name;
    this.setState({
      [name]:value
    })
    
    
  }
  submitHandler()
  {
    const st=this.state;
    var str="fname = "+st.fname+" lname= "+st.lname+" email =  "+st.email+" password = "+st.password+" dob= "+st.dob+" gender = "+st.gender;
    alert(str);
  }
 

  

  render()
  {
    return(
    //  <div onMouseEnter={this.hover}>
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
        <label class="form-label" for="First name">First name</label>
        <input type="text" name="fname" value={this.state.fname} class="form-control" onChange={this.handler} placeholder='First name' />
       
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="Last name">Last name</label>
        <input type="text" name="lname" class="form-control" value={this.state.lname} onChange={this.handler}  placeholder='Last name' />
        
      </div>
      <div class="form-outline mb-4">
      <label class="form-label" for="password">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handler} class="form-control" placeholder='password' />
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="email">Email</label>
        <input type="email" name="email" class="form-control" onChange={this.handler} value={this.state.email} placeholder='email' />
      </div>
      <div class="form-outline mb-4" >
      <label for="date">D.O.B:</label><br/>
      <input type="date"  name="dob" onChange={this.handler} onChange={this.handler} value={this.state.dob}></input>
      </div>
      <div class="form-outline mb-4">
      <select class="form-select mb-4" name="gender" value={this.state.gender} onChange={this.handler} aria-label="Default select example">
        <option value="m">Male</option>
        <option value="f">Female</option>
        <option value="r">Rather not to say</option>
      </select>
      </div>
      <button type="button" class="btn btn-primary btn-block mb-4" onClick={this.submitHandler}>Sign Up</button>
    </form>
  </div>
</div>

     </>
    );
  }


}


ReactDOM.render(  
  <MyForm /> ,
document.getElementById('root')
);
////////////////////////////////////////////////////////////////






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
