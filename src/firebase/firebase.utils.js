import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoQftUM0tKP73L37bmZ80xfhe_VsDhy7s",
    authDomain: "crown-db-5d8a3.firebaseapp.com",
    projectId: "crown-db-5d8a3",
    storageBucket: "crown-db-5d8a3.appspot.com",
    messagingSenderId: "583785307577",
    appId: "1:583785307577:web:55a800003df0083a4a6a68",
    measurementId: "G-JL5B3NQ0WY"
  }

  export const createUserProfileDocument = async (userAuth,addtionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get()

      if(!snapShot.exists) {
        const  {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            }
            )

        } catch (error){
            console.log('error creating user', error.message);
        }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
