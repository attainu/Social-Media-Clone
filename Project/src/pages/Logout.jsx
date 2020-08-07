import React, { Component } from 'react';
import {firebaseApp} from "../firebase"
import { connect} from 'react-redux';

class Logout extends Component {
    LogOut(){
    firebaseApp.auth().signOut()
    }
    render() {
        return (
            <div>
               
                <button className="btn btn-dander"
                onClick={()=> this.LogOut()}>Logout</button>
             
                
                
            </div>
        )
    }
}
function mapStateToProps(state){
console.log("state",state);
return {}
}
export default connect(mapStateToProps,null) (Logout);
