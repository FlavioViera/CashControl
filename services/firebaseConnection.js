import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyD7OLHhgv94tvCzA7za8E4l2Y9mbJ5CB_g",
    authDomain: "meutodo-cc5cc.firebaseapp.com",
    databaseURL: "https://meutodo-cc5cc-default-rtdb.firebaseio.com",
    projectId: "meutodo-cc5cc",
    storageBucket: "meutodo-cc5cc.appspot.com",
    messagingSenderId: "936665111659",
    appId: "1:936665111659:web:e9f6d091f8ff575dd7e52e"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;