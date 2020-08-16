import React from 'react'
import PostSummary from './PostSummary';
import {Link} from "react-router-dom"

const PostList = ({posts}) => {
    return (
        <div className="post-list section">
            {posts && posts.map(post => {
                return(
                    <Link key={post.id} to={"/post/" + post.id}>
                    <PostSummary post={post} key={post.id} postId={post.id}/>
                    </Link>
                )
            })}
            
           

            
        </div>    
    )
}
export default PostList;