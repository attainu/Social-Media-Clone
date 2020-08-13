import React, { Component } from "react";
import { register } from "../../redux/actions/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logo  from "./img/logo.svg";
import  mail  from "./img/mail.svg";
import  pass  from "./img/mail.svg";
import  user  from "./img/user.svg";
import  check  from "./img/checked.png";
import "./style.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    userName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.register(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="align">
        <img className="logo" src={logo} />
        <div className="card">
          <div className="head">
            <div></div>
            <a id="register" className="selected">
              Register
            </a>
            <div></div>
          </div>
          <div className="tabs">
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <div className="input">
                  <input
                    placeholder="Email"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <img src={mail} />
                </div>
                <div className="input">
                  <input
                    placeholder="Username"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <img src={user} />
                </div>
                <div className="input">
                  <input
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                  />
                  <img src={pass} />
                </div>
              </div>
              <button>Register</button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(register(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
