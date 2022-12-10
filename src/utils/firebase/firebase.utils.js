import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDv36clcxddpHqjkTkNU8ZpV_UR93k1aRk',
  authDomain: 'crwn-clothing-db-2c571.firebaseapp.com',
  projectId: 'crwn-clothing-db-2c571',
  storageBucket: 'crwn-clothing-db-2c571.appspot.com',
  messagingSenderId: '271037194534',
  appId: '1:271037194534:web:80f2b6863a5fb5afb661e7',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  // database, collection name, document id
  // even if the document doesn't exist, it will return a doc reference
  const userDocRef = doc(db, 'users', userAuth.uid);

  // check if the document exists
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userDocRef;
};
