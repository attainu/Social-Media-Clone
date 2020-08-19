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



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/post/:id" component={PostDetails}/>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/uploadPost" component={UploadPost} />
      </Switch>
     </div>
     </BrowserRouter>
  );
}

export default App;
