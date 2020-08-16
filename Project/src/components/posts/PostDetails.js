import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';
import LikeButton from "./LikeButton"
// import Comments from './Comments';
// import CommentList from "./CommentList"








const PostDetails = (props) => {


    console.log(props)
    const { post } = props;
    const { auth } = props;
    // const {comments} = this.props


    if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />

    if (post) {
        return (
            <>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={post.imgURL} alt=" " />
                            </div>
                            <div className="card-content">
                                <span className="card-title">Posted by {post.username}</span>
                                <p>{post.caption}</p>
                                <p>
                                    Posted {post.createdAt.toDate().toDateString()}
                                </p>
                            </div>


                        </div>

                    </div>
                </div>
                <LikeButton/>
                <div>
                {/* <Comments/>
                {post.username}:<CommentList/> */}
                </div>



            </>

        )
    }
    else {
        return (
            <div><h3>Loading....</h3></div>
        )
    }
}


const mapStateToProps = (state, componentProps) => {
    console.log(componentProps)

    const id = componentProps.match.params.id;
    console.log(id)




    const posts = state.firestore.data.posts;




    const post = posts ? posts[id] : null


    return {
        post: post,
        auth: state.firebase.auth,

    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "posts" }]))(PostDetails);