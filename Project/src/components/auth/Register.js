import React, { Component } from 'react';
import { logo } from "./img/logo.svg";
import { mail } from "./img/mail.svg";
import { pass } from "./img/mail.svg";
import { user } from "./img/user.svg";
import "./style.css";


class Register extends Component {
    state = {
        email:"",
        password:"",
        username:""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (

            <div className="align">
            <img className="logo" src={logo}/>
            <div className="card">
                <div className="head">
                    <div></div>
                    <a id="register" href="#register">Register</a>
                    <div></div>
                </div>
                <div className="tabs">
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputs">
                            <div className="input">
                                <input placeholder="Email" type="text" onChange={this.handleChange}/>
                                <img src={mail}/>
                            </div>
                            <div className="input">
                                <input placeholder="Username" type="text" onChange={this.handleChange}/>
                                <img src={user}/>
                            </div>
                            <div className="input">
                                <input placeholder="Password" type="password" onChange={this.handleChange}/>
                                <img src={pass}/>
                            </div>
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
};

export default Register;
