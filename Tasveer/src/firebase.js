import  firebase from "firebase/app";
import "firebase/firestore";
import  "firebase/auth"

    const firebaseConfig = {
        apiKey: "AIzaSyAPbkdlLq-8GlUlRn7Sx01IH2IkyytuOtQ",
        authDomain: "social-media-8c2b5.firebaseapp.com",
        databaseURL: "https://social-media-8c2b5.firebaseio.com",
        projectId: "social-media-8c2b5",
        storageBucket: "social-media-8c2b5.appspot.com",
        messagingSenderId: "980555611650",
        appId: "1:980555611650:web:ca973e02ff16c9ea5e311b",
        measurementId: "G-9DN4B24M7X"
      };
firebase.initializeApp(firebaseConfig)


export default firebase;