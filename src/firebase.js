import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDfRMsuNNw1dOQ-E4mH1wYPK4Eytykikf8",
    authDomain: "code-fury-patents-app.firebaseapp.com",
    databaseURL: "https://code-fury-patents-app.firebaseio.com",
    projectId: "code-fury-patents-app",
    storageBucket: "",
    messagingSenderId: "598203279632",
    appId: "1:598203279632:web:5ede85437bb443b6e99d95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase