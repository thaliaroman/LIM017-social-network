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
  onAuthStateChanged,
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
  getDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

// eslint-disable-next-line no-unused-vars
import { app } from './configurationfirebase.js';

// Inicializando Auth y Firestore
const db = getFirestore();
const auth = getAuth();

// Actualiza la información del usuario
export const updater = (fullName) => updateProfile(auth.currentUser, {
  displayName: fullName,
});

// Enviar email de verificación
export const sendMail = () => sendEmailVerification(auth.currentUser);

// Función para registrarse con correo y contraseña
export const registerUser = (email, password) => {
  auth.languageCode = 'es';
  return createUserWithEmailAndPassword(auth, email, password);
};

// Función para iniciar sesión - usuarios registrados
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Iniciar sesión con Google
const Provider = new GoogleAuthProvider();
export const startGoogle = () => {
  return signInWithPopup(auth, Provider);
};

// Funcion para obtener la información del perfil del usuario logeado
export const getCurrentUser = () => auth.currentUser;

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

// Editar Post
export const editPost = (id) => {
  return getDoc(doc(db, 'publicaciones', id));
};

// Actualizar post (documento en firestore)
export const updatePost = (id, newContent) => updateDoc(doc(db, 'publicaciones', id), newContent);

// Funcion para cerrar sesión
export const loginOutUser = () => {
  return signOut(auth);
};

// Observador
export const observator = async (userftn) => {
  await onAuthStateChanged(auth, userftn);
};
