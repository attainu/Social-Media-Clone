import React from 'react';
import {Link} from "react-router-dom";
import SignInLinks from "./SignInLinks"
import SignOutLinks from "./SignOutLinks"
import Notification from "../dashboard/Notifications";
import { connect } from 'react-redux';

const NavBar = (props) => {

    const {auth} = props;


    console.log(auth)
 
    const links = auth.uid ? <SignInLinks/>&&<Notification/> : <SignOutLinks/>
    console.log(links)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="conatiner">
                <Link to="/" className="brand-logo">Social</Link>

                 {auth.isLoaded && links}
                {/* <SignInLinks/>
                <SignOutLinks/> */}
                {/* <Notification/> */}
            
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state) 
    return {
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps) (NavBar);
