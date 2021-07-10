import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKEXEI0Cu31UTGZ1YLJYsBhQXXS4vZw5k",
  authDomain: "crwn-db-1c7fa.firebaseapp.com",
  projectId: "crwn-db-1c7fa",
  storageBucket: "crwn-db-1c7fa.appspot.com",
  messagingSenderId: "195869853567",
  appId: "1:195869853567:web:a49127cc3510ceaa403c4a",
  measurementId: "G-353KP1WVMC",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc("users/23fmvcvnmc"))

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;