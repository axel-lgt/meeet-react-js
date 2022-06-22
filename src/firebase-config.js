import { useState, useEffect } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpLiPiCbY9fPj-DO9IDZYY1Ji9b8PHLYM",
  authDomain: "firestore-react-d7cbe.firebaseapp.com",
  projectId: "firestore-react-d7cbe",
  storageBucket: "firestore-react-d7cbe.appspot.com",
  messagingSenderId: "1039328441627",
  appId: "1:1039328441627:web:94b01d9187dd3b46e74fbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
    return signOut(auth);
}

export function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
}

export function changeEmail(email) {
    return updateEmail(auth.currentUser, email)
}

// export function deleteAccount() {
//     return currentUser.delete();
// }
 
// Custom Hook to check if user is logged in
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;

}
export const db = getFirestore(app);
export const auth = getAuth(app);