// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtS2iNoHj_AfXFhTspwENo_UOGys1AzqY',
  authDomain: 'clone-0410.firebaseapp.com',
  projectId: 'clone-0410',
  storageBucket: 'clone-0410.appspot.com',
  messagingSenderId: '667807043373',
  appId: '1:667807043373:web:451b5f4d5bf9e9dfcd8da4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
