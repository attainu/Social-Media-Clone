import React, { Component } from 'react'
import {userLogin} from "../actions/loginActions";
import {connect} from "react-redux";



class Login extends Component{
    state={
        username:"",
        password:""
    }


    handleInputChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.dispatch(userLogin(this.state.username,this.state.password))
        this.setState({
            username:"",
            password:""
        })
    }


render (){
    return (
        <div>
            {
                this.props.loggedIn ? (
                    <h3>Already Logged In</h3>
                ) : (
                    <div>
                        <h4>Log In</h4>
                        <hr/>
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>
                                    Username
                                </label>
                                <input name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                className="form-control"
                                type="text"/>

                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                    <input
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    className="form-control"
                                    type="text"/>
                            </div>
                                <input
                                type='submit'
                                value='Log In'
                                className='btn btn-success'
                                />
                        </form>
                    </div>
                )
            }

        </div>
    )
}
}
function mapStateToProps(store) {
    return {
        loggedIn : store.activeUser.loggedIn
}
}

export default connect (mapStateToProps)(Login)



