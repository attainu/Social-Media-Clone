import React from "react";
import "./App.css";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";

import { Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import PostDetails from "./components/posts/PostDetails";
import UploadPost from "./components/posts/UploadPost";
import { BrowserRouter } from 'react-router-dom';

// // import { browserHistory } from "react-router";
// // import {firebaseApp} from "./firebase";
// import Home from "./pages/Home";
// // import store from "./store";
// // import { logUser } from "./actions/userAction";

// firebaseApp.auth().onAuthStateChanged(user=>{
//   if(user){
//     console.log("user has signed in or up",user)
//     const {email} = user
//     store.dispatch(logUser(email))
//     browserHistory.push("/")
//   }else {
//     console.log("user has signed out or still needs to sign in")
//      browserHistory.replace("/login")
//   }
// })

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <NavBar/>

    
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/post/:id" component={PostDetails}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/uploadPost" component={UploadPost} />
      </Switch>
     
    </div>
     </BrowserRouter>

    
  );
}

export default App;
