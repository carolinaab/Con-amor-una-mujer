
import firebase from 'firebase/app';
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyAvq49MSH3sU2lACk4vtPNrh-UaOpaBdj0",
  authDomain: "porunamujer-22400.firebaseapp.com",
  databaseURL: "https://porunamujer-22400.firebaseio.com",
  projectId: "porunamujer-22400",
  storageBucket: "porunamujer-22400.appspot.com",
  messagingSenderId: "68635348721",
  appId: "1:68635348721:web:f2e16820285fae60dae350",
  measurementId: "G-HFTJS2XW8R"
};

export const firebaseApp = firebase.initializeApp(config);
export let db = firebase.firestore();
// export const storage = firebase.storage()