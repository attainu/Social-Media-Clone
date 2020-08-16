import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router';
import "./postDetails.css";
import LikeButton from "./LikeButton";

const PostDetails = (props) => {

    console.log(props)
    const {post} = props;  
    const {auth} = props;  

    if(auth.isLoaded && !auth.uid) return <Redirect to ="/signin"/>

    if (post) {
    return (
        <>
            <div>
                <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                    <div>
                        <img className="profile-pic" style={{width:"160px",height:"160px", borderRadius:"80px", marginLeft:"-70px"}} src={post.imgURL}  alt="Profile-img"/>
                    </div>
                    <div>
                        <h4>Jhon Snow</h4>
                        <div style={{display:"flex", justifyContent:"space-between",width:"180%"}}>
                            <h6><strong>1</strong> posts</h6>
                            <h6><strong>0</strong> followers</h6>
                            <h6><strong>0</strong> following</h6>
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <img className="item" src={post.imgURL} alt="posts"/>
                </div>
            </div>




            {/* <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={post.imgURL} alt=" " />
                    </div>
                    <div className="card-content">
                    <span className="card-title">Posted by {post.username}</span>    
                    <p>{post.caption}</p>
                    <p className="grey-text">09th August 2020</p>
                    </div>
                </div>
                </div>
            </div> */}
        </>    

    )
}
else{
    return (
        <div><h3>Loading....</h3></div>
    )
}
}


const mapStateToProps = (state,componentProps) =>{
    const id = componentProps.match.params.id;

    const posts = state.firestore.data.posts;

    const post = posts ? posts[id] : null
    return {
        post:post,
        auth : state.firebase.auth
    }
}


export default compose(connect(mapStateToProps), firestoreConnect([{collection:"posts"}])) (PostDetails);