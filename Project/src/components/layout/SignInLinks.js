 import React from "react";
import {NavLink, Link} from "react-router-dom";
import {signOut} from "../../redux/actions/authAction";
import {connect} from "react-redux";



const SignInLinks = (props) => {
    console.log(props)
    return (
        <ul className="right">
            <li><Link onClick={props.signOut} to="/">Log Out</Link></li>
            <li><NavLink to="/UploadPost">Upload Post</NavLink></li>
            <li><NavLink to="/" >Hi! {props.profile.username}</NavLink></li>
        </ul>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps) (SignInLinks);