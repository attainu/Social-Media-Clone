import React from "react";

import "./App.css";
// import Login from "./pages/loginPages";
import SignUp from "./pages/SignUp";
import { firebaseApp}  from "./firebase";
import { Switch, Route } from "react-router-dom";



firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
    console.log("user has signed in or up",user)
  } else {
    console.log("user is signed out or still needs to sign in")
  }
})
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/signUp" component={SignUp}/>
        {/* <Route path = "/login" component={Login}/> */}
      </Switch>
      
      
    </div>
  );
}

export default App;
