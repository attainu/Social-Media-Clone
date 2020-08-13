import React, { Component } from 'react'
import {register} from "../../redux/actions/authAction"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends Component {
    state = {
        email:"",
        password:"",
        userName:""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       
        this.props.register(this.state)
    }
    render() {
        const {authError,auth} = this.props;
        if(auth.uid) return <Redirect to= "/signin" />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className={"grey-text-darken-3"}> Register Page</h5>
                    <div className={"input-field"}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="userName">UserName</label>
                        <input type="text" id="userName" onChange={this.handleChange}/>
                    </div>
                    <div className={"input-field"}>
                        <button className={"btn blue lighten-1 z-depth-0"}>Register</button>

                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null }</div>    
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register:(newUser) => dispatch(register(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Register);
