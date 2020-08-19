 import React from "react";
import {NavLink, Link} from "react-router-dom";
import {signOut} from "../../redux/actions/authAction";
import {connect} from "react-redux";
import TelegramIcon from '@material-ui/icons/Telegram';



const SignInLinks = (props) => {
    console.log(props)
    return (
        <ul className="right">
            <li><NavLink to="/" >Hi! {props.profile.username}</NavLink></li>
            <li><NavLink to={{ pathname: "https://tasveerchatroom.netlify.app/" }} target="_blank">ChatRoom <TelegramIcon style={{marginTop:"5px"}}/></NavLink></li>
            <li><NavLink to="/UploadPost">Upload Post</NavLink></li>
            <li><Link onClick={props.signOut} to="/">Log Out</Link></li>
        </ul>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps) (SignInLinks);