// import * as firebase from "firebase";
// import firebaseApp from "../../firebase";
// const database = firebase.database();

// export const comments = (post,posts,comment) => {
//   return (dispatch) => {

//             firebase.database().ref(`/posts/${post.uid}/${post}`).update({
//               comment:comment
//             })
//             .then(()=>{
//               firebase.database().ref(`/posts/${post.uid}/${post}/comments`).push({
//                 username:post.username,
//                 comment:comment
//               })
//             })
//           .then(() => {
//             dispatch({ type: "CREATE_COMMENTS", comment: comment });
//           })
//           .catch((err) => {
//             dispatch({ type: "CREATE_COMMENTS_ERROR" });
//           });
//       }
//     }
  
export const addComment = comment =>  
 (  
     {   
         type: "ADD_COMMENT",   
         payload: comment   
     }  
);  