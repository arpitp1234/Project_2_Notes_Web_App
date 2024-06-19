
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About'
import Alert from './component/Alert';
import{Route,BrowserRouter as Router, Switch} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Login from './component/Login';
import Signup from './component/Signup';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
  <>
  <NoteState>
   <Router>
    <Navbar/> 
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
       <Route exact path="/">
        <Home showAlert={showAlert}/>
       </Route>
       <Route exact path="/About">
         <About/>
       </Route> 
       <Route exact path="/Login">
         <Login showAlert={showAlert} />
       </Route>
       <Route exact path="/Signup">
         <Signup showAlert={showAlert}/>
       </Route>
    </Switch>
    </div>
   </Router>
   </NoteState>
  </>
  );
}

export default App;
