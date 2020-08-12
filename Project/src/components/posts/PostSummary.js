import React from 'react'


const PostSummary = ({post}) => {
    return (
            <div className="row">
                <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                    <img src={post.imgURL} alt=" " />
                    </div>
                    <div className="card-content">
                    <span className="card-title">{post.username}</span>    
                    
                    <p className="grey-text"></p>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default PostSummary;