import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../redux/actions/postActions";
import * as firebase from "firebase";
import firebaseApp from "../../firebase";
import {Redirect} from "react-router-dom"


const storage = firebase.storage();

class UploadPost extends Component {
  state = {
    username: "",
    caption: "",
    image: null,
    progress: 0,
    url: "",
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  Change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });

            firebase
              .firestore()
              .collection("posts")
              .add({
                imgURL: url,
                caption: this.state.caption,
                username: this.state.username,
                createdAt: new Date(),
              })
              .then(() => {
                this.setState({ imgURL: ""});
              });
          
          });
        console.log("image:", image);
      }
    );
  
  };
  render() {
     const {auth} =this.props;
     if(auth.isLoaded && !auth.uid) return <Redirect to ="/signin"/>
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className={"grey-text-darken-3"}> Post Here ...</h5>
          <div>
            <img
              src={this.state.url || "http://via.placeholder.com/400x300"}
              alt=""
              height="300"
              width="400"
            />
            <progress value={this.progress} max="100" />
            <div className={"input-field"}>
              <label htmlFor="caption">Post Content</label>
              <input
                id="caption"
                className={"materialise-textarea"}
                onChange={this.Change}
              />
            </div>
            <div className={"input-field"}>
              <label htmlFor="Username">Name</label>
              <input
                id="username"
                className={"materialise-textarea"}
                onChange={this.Change}
              />
            </div>

            <input type="file" onChange={this.handleChange} />

            <div className={"input-field"}>
              <button
                onClick={this.handleUpload}
                className={"btn blue lighten-1 z-depth-0"}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
  
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPost);
