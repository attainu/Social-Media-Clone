import React from 'react';
import {NavLink} from "react-router-dom";

const SignOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
        </ul>
    )
}

export default SignOutLinks;
