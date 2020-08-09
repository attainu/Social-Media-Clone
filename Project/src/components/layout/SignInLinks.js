 import React from "react";
import {NavLink} from "react-router-dom";


const SignInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/UploadPost">Upload Post</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">BP</NavLink></li>
        </ul>
    )
}
export default SignInLinks;