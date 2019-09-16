import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBB5bfJf0A2ji41EXHmSPzBd3v2KFZ2Pp0",
    authDomain: "crwn-db-780a6.firebaseapp.com",
    databaseURL: "https://crwn-db-780a6.firebaseio.com",
    projectId: "crwn-db-780a6",
    storageBucket: "",
    messagingSenderId: "878183410448",
    appId: "1:878183410448:web:9d51847f86a0751b9b1395"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;