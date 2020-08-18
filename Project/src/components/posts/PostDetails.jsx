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
    console.log(post) 

    if(auth.isLoaded && !auth.uid) return <Redirect to ="/signin"/>

    if (post) {
    return (
        
        <>
            <div>
                <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"}}>
                    <div>
                        <img className="profile-pic" style={{width:"160px",height:"160px", borderRadius:"80px", marginLeft:"-70px"}} src={post.imgURL}  alt="Profile-img"/>
                        <p>{post.description}</p>
                    </div>
                    <div>
                        <h4>{post.username}</h4>
                      
                        <div style={{display:"flex", justifyContent:"space-between",width:"180%"}}>
                            <h6><h5>6</h5> posts</h6>
                            <h6><h5>10</h5> Followers</h6>
                            <h6><h5><strong>7</strong></h5> Following</h6>
                        </div>
                    </div>
                </div>
             
                <div className="gallery">
                    <img className="item" src={post.imgURL} alt="posts"/>
                    <img className="item" src="https://picsum.photos/id/237/200" alt="posts"/>
                    <img className="item" src="https://picsum.photos/seed/picsum/200" alt="posts"/>
                    <img className="item" src="https://picsum.photos/id/1018/200" alt="posts"/>
                    <img className="item" src={post.imgURL} alt="posts"/>
                    <img className="item" src="https://picsum.photos/id/1074/200" alt="posts"/>


                </div>
    
     
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




    const users = state.firestore.data.users;




    const post = users ? users[id] : null


    return {
        post: post,
        auth: state.firebase.auth,

    }
}


export default compose(connect(mapStateToProps), firestoreConnect([{collection:"users"}])) (PostDetails);
