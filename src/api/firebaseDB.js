import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAZ-g6h6rqg0Yu4vpDhVu495nu0TYdN0zc",
  authDomain: "developerdot-150b0.firebaseapp.com",
  databaseURL: "https://developerdot-150b0-default-rtdb.firebaseio.com",
  projectId: "developerdot-150b0",
  storageBucket: "developerdot-150b0.appspot.com",
  messagingSenderId: "742899646471",
  appId: "1:742899646471:web:c8d6fefec0743b2472eaa2",
  measurementId: "G-YFZPD32R8D",
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBHZ4hUibHQnSrp01bANfLje6tAXbv85BA",
//   authDomain: "developerdot-ef57f.firebaseapp.com",
//   projectId: "developerdot-ef57f",
//   storageBucket: "developerdot-ef57f.appspot.com",
//   messagingSenderId: "668600290740",
//   appId: "1:668600290740:web:da9f12bff174f9bb7376e1",
//   measurementId: "G-J3YVWGX2Y0"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoreDB = firebase.firestore();

export default firestoreDB;
