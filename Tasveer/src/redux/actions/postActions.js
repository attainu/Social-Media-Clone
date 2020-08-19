import * as firebase from "firebase";
import firebaseApp from "../../firebase";
const storage = firebase.storage();

export const createPost = (post) => {
  return (dispatch) => {
    // const firestore = getFirestore();
    const uploadTask = storage.ref(`images/${post.image.name}`).put(post.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(post.image.name)
          .getDownloadURL()
          .then((url) => {
            // this.setState({ url });
            firebase.firestore().collection("users").add({
              imgURL: url,
              caption: post.caption,
              username: post.username,
              createdAt: new Date(),
             
              
             
            });
            
          })
          .then(() => {
            dispatch({ type: "CREATE_POST", post: post });
          })
          .catch((err) => {
            dispatch({ type: "CREATE_POST_ERROR", err });
          });
      }
    );
  };
};
