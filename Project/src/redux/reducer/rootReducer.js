import authReducer from "./authReducer";
import postReducer from "./postReducer";

import {combineReducers} from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import commentsReducer from "./commentsReducer";


const rootReducer = combineReducers ({
    auth: authReducer,
    post:postReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    profile:authReducer,
    comments:commentsReducer
    
})

export default rootReducer;