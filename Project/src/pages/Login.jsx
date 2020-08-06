import React, { Component } from 'react';
import {firebaseApp} from "../firebase"
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:"",
       password:"",
       error:{
         message:""
       }
    }
  }
  
  login(){
    console.log("this.state",this.state)
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
    .catch(error => {
      console.log("error",error)
      this.setState({error})
    })
  }
  render() {
    return (
      <div className="form-inline">
        <h2>Login</h2>
        <div className="form-group">
          <input className="form-control"
          type="text"
          placeholder="email"
          onChange={event => this.setState({email:event.target.value})}/>
          <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={event => this.setState({password:event.target.value})} />
          <button className="btn btn-primary"
          type="button"
          onClick={()=>this.login()}>Login</button>
         
        </div>
        <div>{this.state.error.message}</div>
        <div>Create a Account<Link to ={"/signup"}>Sign up</Link></div>
      </div>
    )
  }
}
export default Login;
