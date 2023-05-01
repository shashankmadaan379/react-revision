import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4CdOfzeyY_ynutzoWiSYe6x2Bncr5JYM",
  authDomain: "chatapprealtime-16671.firebaseapp.com",
  projectId: "chatapprealtime-16671",
  storageBucket: "chatapprealtime-16671.appspot.com",
  messagingSenderId: "803621290769",
  appId: "1:803621290769:web:de6f195121175588a902b0",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
