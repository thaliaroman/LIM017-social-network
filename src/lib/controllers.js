/* eslint-disable arrow-body-style */
import {
  registerUser, loginUser, startGoogle, getCurrentUser, toPost, toTheTime,
} from './libraries-Firebase.js';
// registra nuevos usuarios
export const register = () => {
  const email = document.getElementById('e-mail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const fullName = document.getElementById('name').value;
  registerUser(email, password, fullName)
    .then(() => {
      window.location.hash = '/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Code: ${errorCode}`);
      console.log(`Message: ${errorMessage}`);
    });
};

// logea usuarios registrados
export const login = () => {
  const email = document.getElementById('e-mailLogin').value;
  const password = document.getElementById('passwordLogin').value;
  loginUser(email, password)
    .then(() => {
      // Signed in
      window.location.hash = '#/home';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// Iniciar sesión con Google
// export const loginGoogle = () => {
//   return startGoogle
//     .then(() => {
//       // Signed in
//       window.location.hash = '#/home';
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };

export const getCurrent = () => getCurrentUser('anonimo');

// crea colección
// Crear un documento con el contenido a publicar en la colección publicaciones
export const toPoster = () => {
  const forPost = document.querySelector('.post__input').value;
  const user = getCurrent();

  const dateTime = toTheTime();
  // const content = forPost;
  const photo = user.photoURL;

  const docRef = toPost(user.displayName, user.uid, dateTime, forPost, photo);
  console.log('Document written with ID: ', docRef.id);
  return docRef;
};
