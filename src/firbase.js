import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZaoLszWdWTSnwrJYrAvLZ2vktWVQPjKY",
    authDomain: "twitter-clone-react-176ea.firebaseapp.com",
    projectId: "twitter-clone-react-176ea",
    storageBucket: "twitter-clone-react-176ea.appspot.com",
    messagingSenderId: "843900907360",
    appId: "1:843900907360:web:987de83595cd5d4d773805",
    measurementId: "G-MRK8G2MXL0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 

  export default db;