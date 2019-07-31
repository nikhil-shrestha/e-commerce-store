import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCaZIHxFSb2FnS9ab-wTUIiji7tDLkrH6g',
  authDomain: 'crwn-db-ad423.firebaseapp.com',
  databaseURL: 'https://crwn-db-ad423.firebaseio.com',
  projectId: 'crwn-db-ad423',
  storageBucket: '',
  messagingSenderId: '133254671689',
  appId: '1:133254671689:web:1401e78153cb3055'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
