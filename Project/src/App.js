import React from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { Switch, Route  } from "react-router-dom";
import { browserHistory } from "react-router";
import {firebaseApp} from "./firebase";
import Home from "./pages/Home";
import store from "./store";
import { logUser } from "./actions/userAction";

firebaseApp.auth().onAuthStateChanged(user=>{
  if(user){
    console.log("user has signed in or up",user)
    const {email} = user
    store.dispatch(logUser(email))
    browserHistory.push("/")
  }else {
    console.log("user has signed out or still needs to sign in")
     browserHistory.replace("/login")
  }
})

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>  
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/login" component={Login} /> 
      </Switch>
    </div>
  );
}

export default App;
