import React from 'react';
import {Link} from "react-router-dom";
import SignInLinks from "./SignInLinks"
import SignOutLinks from "./SignOutLinks"
import Notification from "../dashboard/Notifications";

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="conatiner">
                <Link to="/" className="brand-logo">Social</Link>
                <SignInLinks/>
                <SignOutLinks/>
                <Notification/>
            
            </div>
        </nav>
    )
}

export default NavBar;
