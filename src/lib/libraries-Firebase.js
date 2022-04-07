/* eslint-disable arrow-body-style */
/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  Timestamp,
  query,
  orderBy,
  deleteDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

import { app } from './configurationfirebase.js';

// Inicializando Auth y Firestore
const db = getFirestore();
const auth = getAuth();

export const updater = (fullName) => updateProfile(auth.currentUser, {
  displayName: fullName,
});

export const sendMail = () => sendEmailVerification(auth.currentUser);

// Función para registrarse con correo y contraseña
export const registerUser = (email, password, fullName) => {
  auth.languageCode = 'es';
  return createUserWithEmailAndPassword(auth, email, password);
};

// Función para iniciar sesión - usuarios registrados
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Iniciar sesión con Google
export const Provider = GoogleAuthProvider;
export const startGoogle = (prov) => {
  return signInWithPopup(auth, prov);
};

// Funcion para obtener la información del perfil del usuario logeado
export const getCurrentUser = () => {
  const unknow = 'unknow';
  const user = auth.currentUser;
  if (user !== null) {
    return user;
  }
  return { displayName: unknow };
};

// Crear un documento con el contenido a publicar en la colección publicaciones
export const toPost = async (contentPost) => {
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    user: getCurrentUser().displayName,
    uid: getCurrentUser().uid,
    dateTime: Timestamp.fromDate(new Date()),
    content: contentPost,
    photo: getCurrentUser().photoURL,
  });
  return docRef;
};

// Leer el contenido de cada documento de la colección publicaciones
export const loadPosts = async (idk) => {
  const q = query(collection(db, 'publicaciones'), orderBy('dateTime', 'desc'));
  // onSnapshot para actualización de datos en timpo real
  await onSnapshot(q, idk);
};

// Borrar documento que contiene la publicación
export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'publicaciones', id));
};

// Funcion para cerrar sesión
export const loginOutUser = () => {
  return signOut(auth);
};
