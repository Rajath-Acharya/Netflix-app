import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCwraE0bJBY2lX8A85dFa6Y0LP5oYixrKI",
  authDomain: "netflix-clone-abc91.firebaseapp.com",
  databaseURL: "https://netflix-clone-abc91.firebaseio.com",
  projectId: "netflix-clone-abc91",
  storageBucket: "netflix-clone-abc91.appspot.com",
  messagingSenderId: "829350614982",
  appId: "1:829350614982:web:17f8d487670761c35204c7",
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();
export default fire;
