import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Signup = (props) => {
     const[credential,setcredential]=useState({name:"" ,email:"",password:"",cpassword:""});
    let history=useHistory();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const {name,email,password}=credential;
        const response =await fetch("http://localhost:5000/api/auth/createUser",{
          
            method:'POST',
            headers:{
                'Content-Type':'application/json',  
            },
            body: JSON.stringify({name,email,password})
            
        });
     const json = await response.json();
     console.log(json);
     if(json.success){
        //Save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully","success");
    }else{
      //danger here is a type ,see different type of alert from bootstrap.
      props.showAlert("Invalid Credentials",'danger');
    }
  }
const onChange=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
}
  return (
    <div className="container mt-5">
      <h2><center>Sign In</center></h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' placeholder="Enter name" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' placeholder="Enter email" onChange={onChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password"  name='password' onChange={onChange} minLength={5} required/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="confirmpassword" placeholder=" Confirm Password" name='confirmpassword' onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
