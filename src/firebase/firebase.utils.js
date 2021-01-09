import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { FIREBASE_CONFIG_API_KEY } from '../secret.js';

const config = FIREBASE_CONFIG_API_KEY;


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;