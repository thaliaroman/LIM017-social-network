/* eslint-disable indent */
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut,
  }
    from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

  import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    Timestamp,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    arrayRemove,
    arrayUnion,
  } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
  
  import { app } from './config-firebase.js';

export const auth = getAuth();
export const db = getFirestore();