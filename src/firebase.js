import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyBIYW-JYY67mfezCKlo1hKgbcBXsV9s7ZY",
  authDomain: "bitbean-library-app.firebaseapp.com",
  databaseURL: "https://bitbean-library-app.firebaseio.com",
  projectId: "bitbean-library-app",
  storageBucket: "bitbean-library-app.appspot.com",
  messagingSenderId: "172010243483"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;