// import React, { useState, useEffect } from 'react';
// import * as firebase from "firebase";
// import firebaseApp from "../../firebase";
// const database = firebase.database();

// const Comments = ({postId,username,caption,imgURL}) => {

//   const [comments, setComments] = useState([])
//   const [input, setInput] = useState("")

//   useEffect(()=>{
//     let unsubscribe;
//     if(postId){
//       unsubscribe=firebase.firestore().database.collection("posts").doc(postId).collection("comments").onSnapshot((snapshot)=>{
//         setComments(snapshot.docs.map((doc)=>doc.data()))
//       })
//       return() =>{
//         unsubscribe();
//       }
//     }

//     },[postId])


//   const addComment = (event) => {
//     event.preventDefault();
//     setComments([...comments, input])
//     setInput("");
//   }

//   return (
//     <div>
//       {username}
//       {username}
//       <form>
//         <input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="Enter..." />
//         <button type="submit" onClick={addComment}>Add Comments</button>
//       </form>

//       <ul>
//         {comments.map(comment =>
//           <li key={comment.index}>{comment}
//           </li>
//         )}
//       </ul>


//     </div>

//   )
// }

// export default Comments;

import React, { Component } from 'react'
import { addComment } from "../../redux/actions/commentsAction"
import { connect } from 'react-redux';
import uuivdv1 from "react-uuid";

class Comments extends Component {
  state = {
    comment:""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {comment} = this.state;
    const id = uuivdv1
    console.log(id)
    this.props.addComment({comment,id});
    this.setState({comment:""})
  }
  render() {
   
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mt-3">
        <label htmlFor="comment"><strong>Enter your comments below</strong></label>  
        <textarea type="text" className="form-control"  id="comment"  
         onChange={this.handleChange} />  
        <button type="submit" className="btn btn-success btn-lg mt-2">  
        SAVE  
        </button>
        </div>
        

      </form>
     
      </>
    )
  }

}


export default connect(null, {addComment})(Comments);
