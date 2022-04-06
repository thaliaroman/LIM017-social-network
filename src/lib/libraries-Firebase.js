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
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

import { app } from './configurationfirebase.js';

// Inicializando Auth y Firestore
const db = getFirestore();
const auth = getAuth();

// Función para registrarse con correo y contraseña
export const registerUser = (email, password, fullName) => {
  auth.languageCode = 'es';
  return createUserWithEmailAndPassword(auth, email, password, fullName)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: fullName,
      });
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          // ...
        });
      console.log(userCredential);
      return userCredential;
    });
};

// Función para iniciar sesión - usuarios registrados
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    });
};

// Iniciar sesión con Google
export const startGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      // googleUsers();
      window.location.hash = '#/home';
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

// Funcion para obtener la información del perfil del usuario logeado
export const getCurrentUser = (unknow) => {
  const user = auth.currentUser;
  if (user !== null) {
    console.log(`estoy mostrando el usurario: ${user.displayName}`);
    return user;
  }
  return { displayName: unknow };
};

// Crear un documento con el contenido a publicar en la colección publicaciones
// export const toPost = (user1, uid1, dateTime1, content1, photo1) => addDoc(collection(db, 'publicaciones'), {
//   user: user1, uid: uid1, dateTime: dateTime1, content: content1, photo: photo1,
// });
// export const toTheTime = () => Timestamp.fromDate(new Date());
// Crear un documento con el contenido a publicar en la colección publicaciones
export const toPost = async () => {
  const user = auth.currentUser;
  const forPost = document.querySelector('.post__input').value;
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    user: getCurrentUser().displayName,
    uid: user.uid,
    dateTime: Timestamp.fromDate(new Date()),
    content: forPost,
    photo: user.photoURL,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef;
};

// Leer el contenido de cada documento de la colección publicaciones
export const loadPosts = async () => {
  const q = query(collection(db, 'publicaciones'), orderBy('dateTime', 'desc'));
  // onSnapshot para actualización de datos en timpo real
  const publishSnapshot = onSnapshot(q, (querySnapshot) => {
    let html = '';
    const containerPost = document.querySelector('.main__div-postPeople');
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      const dataDoc = doc.data();
      html += `
      <section class="main__section-postPeople" id="">
          <h3>${dataDoc.user}.</h3>
          <p id="postHour">Publicado a las: ${dataDoc.dateTime.toDate()}</p>
          <p>${dataDoc.content}</p>
          <figure>
            <img class="post2Img" src="../images/foto-post.jpg">
          </figure>
        </section>`;
    });
    containerPost.innerHTML = html;
  });
};

// Funcion para cerrar sesión
export const loginOutUser = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.hash = '#/login';
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};


