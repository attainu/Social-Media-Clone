import React from 'react'
import { connect } from 'react-redux';



const CommentList =({comments}) =>{
    console.log(comments)
    return(
        <ul className="list-group list-group-flush">  
            {comments.map(comment =>(<li key={comment.key}>{comment.comment}</li>) )}
        
    </ul> 

    )
}
    
    
    
    
   


const mapStateToProps = (state) => {  
    console.log(state)
    return { comments: state.comments.comments };  
}; 

export default connect(mapStateToProps)(CommentList)
  