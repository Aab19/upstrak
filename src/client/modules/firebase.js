import firebase from "firebase/app"

require("firebase/auth")


const firebaseConfig = {
  apiKey: "AIzaSyB-73aIKLkCKFyeP3k9oq0Rx10mRuQQsYw",
  authDomain: "upstrak-web.firebaseapp.com",
  databaseURL: "https://upstrak-web.firebaseio.com",
  projectId: "upstrak-web",
  storageBucket: "upstrak-web.appspot.com",
  messagingSenderId: "222171672898",
  appId: "1:222171672898:web:8fc92d440c7c3c2a8218db",
  measurementId: "G-3TPE05Y755"
};

firebase.initializeApp(firebaseConfig)

export default firebase
