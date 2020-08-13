// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
// import App from "./App";

// // SETTING UP REDUX STORE
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./redux/reducer/rootReducer";

// // ENHANCING STORE WITH FIREBASE
// import { reactReduxFirebase } from "react-redux-firebase";
// import firebase from "./firebase";

// const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
//   createStore
// );
// const store = createStoreWithFirebase(
//   rootReducer,
//   {},
//   applyMiddleware(thunk)
// );
// //  const store = createStore(rootReducer,compose(applyMiddleware(thunk),reactReduxFirebase(firebase))) 

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );






import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore , applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducer/rootReducer";
import {reduxFirestore, getFirestore,createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider,getFirebase} from "react-redux-firebase";
import firebaseConfig from "./firebase";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app"




const store = createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),reduxFirestore(firebaseConfig))) 

const profileSpecificProps = {
  userProfile:"users",
  useFirestoreForProfile:true,
  enabledRedirectHandling: false,
  resetBeforeLogin:false
}


const rrfProps = {
  firebase,
  config:firebaseConfig,profileSpecificProps,
  dispatch:store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  
     <Provider store={store}>
       <ReactReduxFirebaseProvider{...rrfProps}>
       
      <App />
      
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
