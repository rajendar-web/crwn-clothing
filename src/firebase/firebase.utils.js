import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config={
    apiKey: "AIzaSyC1vrZAWyyikIWVATDGYKqF8TtnErORcxA",
authDomain: "crwn-db-63a2a.firebaseapp.com",
projectId: "crwn-db-63a2a",
storageBucket: "crwn-db-63a2a.appspot.com",
messagingSenderId: "559530477155",
appId: "1:559530477155:web:70a14b688a1f5c76ff1a56",
measurementId: "G-ZZB6Q5HG5E"
}

firebase.initializeApp(config);


export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase;