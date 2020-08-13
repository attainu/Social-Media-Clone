import React, { Component } from 'react';
import {connect} from "react-redux"
import {signIn} from "../../redux/actions/authAction";
import { logo } from "./img/logo.svg";
import { mail } from "./img/mail.svg";
import { pass } from "./img/mail.svg";
import { user } from "./img/user.svg";
import { check } from "./img/checked.png";
import "./style.css"

class SignIn extends Component {
    state = {
        email:"",
        password:""
        
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       
        this.props.signIn(this.state)
    }
    render() {
        const {authError} = this.props
        return (
                <div className="align">
		<img className="logo" src={logo}/>
		<div className="card">
			<div className="head">
				<div></div>
				<a id="login" className="selected" href="#login">Login</a>
				<div></div>
			</div>
			<div className="tabs">
				<form onSubmit={this.handleSubmit}>
					<div className="inputs">
						<div className="input">
							<input placeholder="Username" type="text" onChange={this.handleChange}/>
							<img src={user}/>
						</div>
						<div className="input">
							<input placeholder="Password" type="password" onChange={this.handleChange}/>
							<img src={pass}/>
						</div>
						<label className="checkbox">
							<input type="checkbox"/>
							<span>Remember me</span>
						</label>
					</div>
					<button>Login</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
				</form>
			</div>
		</div>
	</div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIn);
