import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "1092841642563"
  });
}