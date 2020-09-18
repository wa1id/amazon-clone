import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmhWCWhjnIbErTmWxFaMG2ixgCB7FuamA",
  authDomain: "clone-7c37d.firebaseapp.com",
  databaseURL: "https://clone-7c37d.firebaseio.com",
  projectId: "clone-7c37d",
  storageBucket: "clone-7c37d.appspot.com",
  messagingSenderId: "805960309105",
  appId: "1:805960309105:web:e4bc645559b142b07f7ed0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
