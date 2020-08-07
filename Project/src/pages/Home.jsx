import React, { Component } from 'react';
import {firebaseApp} from "../firebase"
import { connect} from 'react-redux';
import {Link} from "react-router-dom"

class Home extends Component {
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
function mapStateToProps(state){
console.log("state",state);
return {}
}
export default connect(mapStateToProps,null) (Home);
