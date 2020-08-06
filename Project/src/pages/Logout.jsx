import React, { Component } from 'react';
import {firebaseApp} from "../firebase"
import { Link } from 'react-router-dom';

class Logout extends Component {
    LogOut(){
    firebaseApp.auth().signOut()
    }
    render() {
        return (
            <div>
                <Link to ="/login">
                <button className="btn btn-dander"
                onClick={()=> this.LogOut()}>Logout</button>
                </Link>
                
                
            </div>
        )
    }
}
export default Logout;
