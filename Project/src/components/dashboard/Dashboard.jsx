import React, { Component } from "react";
import { connect } from "react-redux";
import PostList from "../posts/PostList";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Notification from "./Notifications"


import './Dashboard.css';
// import UploadPost from '../posts/UploadPost';

class Dashboard extends Component {
  render() {
    console.log(this.props);

    const { users } = this.props;
    
   

    const { auth } = this.props;
    console.log(auth);

    if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashbord conatiner">
        <div className="row">
          <div className="list">
            <PostList users={users} />
           
          </div>
          {/* <Notification/> */}
          {/* <UploadPost/> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    users: state.firestore.ordered.users,
  
   
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users", orderBy:["createdAt","desc"] }])
)(Dashboard);
