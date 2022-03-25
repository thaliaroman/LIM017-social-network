import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";
import { app } from "./configurationfirebase.js";
export const auth = getAuth();
export const db = getFirestore();

export const registerUser = () => {
  const email = document.getElementById('e-mail').value;
  const password = document.getElementById('password').value;
  const fullName = document.getElementById('name').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((UserCredential) => {
      const user = UserCredential.user;
      updateProfile(user, {
        displayName: fullName,
      });
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Code: ' + errorCode);
      console.log('Message: ' + errorMessage);
    });
};

const loginUser = () => {
  console.log('Estoy logeando un usuario');
};

const loginOutUser = () => {
  console.log('Estoy cerrando sesion del usuario');
};

export const getCurrentUser = () => {
  const uid = 'Anonimo';
  const user = auth.currentUser;
  if (user) {
    return user;
  }
  return {displayName: uid };
};
