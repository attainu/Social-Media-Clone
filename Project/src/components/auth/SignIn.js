import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authAction";
import logo from "./img/logo.svg";
<<<<<<< HEAD
import mail from "./img/mail.svg";
=======
// import mail from "./img/mail.svg";
>>>>>>> 808e9b54701912d62640669d4dccec50a4abc28d
import pass from "./img/mail.svg";
import user from "./img/user.svg";
import "./style.css";
import { Redirect } from "react-router-dom";
<<<<<<< HEAD
import Checkbox from "@material-ui/core/Checkbox";
=======
// import Checkbox from "@material-ui/core/Checkbox";
>>>>>>> 808e9b54701912d62640669d4dccec50a4abc28d

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="align">
<<<<<<< HEAD
        <img className="logo" src={logo} />
        <div className="card">
          <div className="head">
            <div></div>
            <a id="login" className="selected">
              Login
            </a>
            <div></div>
=======
        <img className="logo" src={logo} alt=""/>
        <div className="card">
          <div className="head">
            <div>
            <p id="login" className="selected">
              Login
            </p>
           </div>
>>>>>>> 808e9b54701912d62640669d4dccec50a4abc28d
          </div>
          <div className="tabs">
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <div className="input">
                  <input
<<<<<<< HEAD
                    placeholder="Username"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <img src={user} />
=======
                    placeholder="Email"
                    id="email"
                    type="email"
                    onChange={this.handleChange}
                  />
                  <img src={user} alt="" />
>>>>>>> 808e9b54701912d62640669d4dccec50a4abc28d
                </div>
                <div className="input">
                  <input
                    placeholder="Password"
<<<<<<< HEAD
                    type="password"
                    onChange={this.handleChange}
                  />
                  <img src={pass} />
                </div>
                <label className="checkbox">
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                  <span>Remember me</span>
                </label>
=======
                    id="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                  <img src={pass} alt="" />
                </div>
                {/* <label className="checkbox">
                  <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span>Remember me</span>
                </label> */}
>>>>>>> 808e9b54701912d62640669d4dccec50a4abc28d
              </div>
              <button>Login</button>
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
  console.log(state);
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
