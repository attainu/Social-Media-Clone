import React, { Component } from "react";
import { connect } from "react-redux";
import PostList from "../posts/PostList";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Notification from "../dashboard/Notifications"


import './Dashboard.css';
// import UploadPost from '../posts/UploadPost';

class Dashboard extends Component {
  render() {
    console.log(this.props);

    const { posts } = this.props;
    
   

    const { auth } = this.props;
    console.log(auth);

    if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashbord conatiner">
        <div className="row">
          <div className="list">
            <PostList posts={posts} />
           
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
    posts: state.firestore.ordered.posts,
  
   
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy:["createdAt","desc"] }])
)(Dashboard);
