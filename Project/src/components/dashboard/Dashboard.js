import React, { Component } from 'react'
import {connect} from "react-redux"
import PostList from "../posts/PostList";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
// import UploadPost from '../posts/UploadPost';


class Dashboard extends Component {
    render () {
        console.log(this.props)
        const {posts} = this.props;
        return (
            <div className="dashbord conatiner">
                <div className="row">
                    <div className="col s12 m6">
                        <PostList posts={posts}/>
                    </div>
                    {/* <UploadPost/> */}
                   
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return {
        posts:state.firestore.ordered.posts
    }
}

export default compose ( connect(mapStateToProps),firestoreConnect([{collection:"posts"}]) )(Dashboard);