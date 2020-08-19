import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBQQvuMaN6he81ZiZIS8576AHWjcFyTeHI",
        authDomain: "messenger-app-11d58.firebaseapp.com",
        databaseURL: "https://messenger-app-11d58.firebaseio.com",
        projectId: "messenger-app-11d58",
        storageBucket: "messenger-app-11d58.appspot.com",
        messagingSenderId: "1053877971174",
        appId: "1:1053877971174:web:865702f2ea762681123327",
        measurementId: "G-VL3NB1XZFC"   
});

const db = firebaseApp.firestore();

export default db;
