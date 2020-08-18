import React from 'react';
import {Link} from "react-router-dom";
import SignInLinks from "./SignInLinks"
import SignOutLinks from "./SignOutLinks"
import Notification from "../dashboard/Notifications";
import { connect } from 'react-redux';
import "./NavBar.css";

const NavBar = (props) => {

    const {auth,profile} = props;


    console.log(auth)
    console.log(profile)
 
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/>
    console.log(links)
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="conatiner">
                <Link to="/" className="logo">Tasveer.</Link>

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
        auth: state.firebase.auth,
        profile:state.firebase.profile

    }
}

export default connect(mapStateToProps) (NavBar);
