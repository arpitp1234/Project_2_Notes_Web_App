import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const[credential,setcredential]=useState({email:"",password:""});
    let history=useHistory();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/auth/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',  
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
            
        });
     const json = await response.json();
     console.log(json);
     if(json.success){
          //redirect;
        localStorage.setItem('token',json.authtoken);
        props.showAlert("loggin to your Account Successfully","success");
        history.push("/");
     }else{
        props.showAlert("Invalid Credential","danger")
     }
    }

const onChange=(e)=>{
        setcredential({...credential,[e.target.name]:e.target.value})
}
  return (

    <div className="container mx-2 mt-3" >
    <h2><center>Login</center></h2>
      <form onSubmit={handleSubmit}>
   <div className="form-group my-2">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credential.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
  </div>
  <div className="form-group my-2">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password"  id="password" value={credential.password} placeholder="password" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
   </form>
    </div>
  )
}

export default Login
