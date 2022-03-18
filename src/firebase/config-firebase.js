import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBi8rKFqAJseNsRWd-6YSERHM_J-rmkHpY",
    authDomain: "coaching-blog-85d94.firebaseapp.com",
    databaseURL: "https://coaching-blog-85d94-default-rtdb.firebaseio.com/" ,
    projectId: "coaching-blog-85d94",
    storageBucket: "coaching-blog-85d94.appspot.com",
    messagingSenderId: "465988797792",
    appId: "1:465988797792:web:a819121c83431c5b81ca05",
    measurementId: "G-1EGCGQED67"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);

  