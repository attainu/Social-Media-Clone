



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


const rrfProps = {
  firebase,
  config:firebaseConfig,
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
