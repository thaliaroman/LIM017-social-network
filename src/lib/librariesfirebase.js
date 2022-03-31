import {
  getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { getFirestore, addDoc, collection, getDocs, Timestamp, query, orderBy, limit } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from './configurationfirebase.js';

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
      console.log(`Code: ${errorCode}`);
      console.log(`Message: ${errorMessage}`);
    });
};

export const loginUser = () => {
  const email = document.getElementById('e-mailLogin').value;
  const password = document.getElementById('passwordLogin').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
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

// funcion  para otener sesion iniciada del usuario actual (no cerró  sesión)
export const getCurrentUser = () => {
  const uid = 'Anonimo';
  const user = auth.currentUser;
  if (user) {
    return user;
  }
  return { displayName: uid };
};

// datos de usuarios de google
const googleUsers = async () => {
  const user = auth.currentUser;
  if (user !== null) {
    const docRef = await addDoc(collection(db, 'googleUsers'), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
    });
  }
};
// iniciar sesión con Google
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
      googleUsers();
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
// subir post
export const toPost = async () => {
  const forPost = document.querySelector('.post__input').value;
  const docRef = await addDoc(collection(db, "publicaciones"), {
    user: getCurrentUser().displayName,
    datetime: Timestamp.fromDate(new Date()),
    content: forPost,
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef;
};

export const loadPosts = async () => {
  const publishCollection = collection(db, 'publicaciones');
  const publishSnapshot = await getDocs(publishCollection);
  const publishList = publishSnapshot.docs.map(doc => doc.data());
  console.log(publishList);
  // const q = query(db, 'publicaciones'), orderBy("datetime", "desc"));
  // console.log(q);
  return publishList;
};

// cerrar sesión
export const loginOutUser = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/login';
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};
