/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  Timestamp,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from './configurationfirebase.js';

// Inicializando Auth y Firestore
export const auth = getAuth();
export const db = getFirestore();

// Función para registrarse con correo y contraseña
export const registerUser = () => {
  const email = document.getElementById('e-mail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const fullName = document.getElementById('name').value;

  if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName,
        });
        window.location.hash = '/home';
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}`);
        console.log(`Message: ${errorMessage}`);
      });
  } else {
    // eslint-disable-next-line no-alert
    alert('no coincide la contraseña');
  }
};

// Función para iniciar sesión - usuarios registrados
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
export const getCurrentUser = () => {
  const unknow = 'unknow';
  const user = auth.currentUser;
  if (user !== null) {
    return user;
  }
  return { displayName: unknow };
};

// Crear un documento con lo datos de usuarios de google en la collección googleUsers
export const googleUsers = async () => {
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

// Crear un documento con el contenido a publicaren la colección publicaciones
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

// // Leer el contenido del documento de la colección publicaciones
// export const loadPosts = async () => {
//   const publishCollection = query(collection(db, 'publicaciones'), orderBy('dateTime', 'desc'));
//   const publishSnapshot = await getDocs(publishCollection);
//   // publishSnapshot.forEach((doc) => {
//   //   console.log(`${doc.id} => ${doc.data()}`);
//   // });
//   let html = '';
//   const containerPost = document.querySelector('.main__div-postPeople');

//   publishSnapshot.forEach((doc) => {
//     console.log(doc.data());
//     const dataDoc = doc.data();
//     html += `
//     <section class="main__section-postPeople" id="">
//       <img class="section-postPeople__photoUser" src="${getCurrentUser().photoURL}">
//         <h3>${dataDoc.user}.</h3>
//         <p id="postHour">Publicado a las: ${dataDoc.dateTime}</p>
//         <p>${dataDoc.content}</p>
//         <figure>
//         <img class="post2Img" src="../images/fondoInicio4.jpg">
//         </figure>
//       </section>
//     `;
//     containerPost.innerHTML = html;
//   });
//   // new Date(time.seconds * 1000).toTimeString()
// };

// Leer el contenido de cada documento de la colección publicaciones
export const loadPosts = async () => {
  const q = query(collection(db, 'publicaciones'), orderBy('dateTime', 'desc'));
  // onSnapshot para actualización de datos en timpo real
  const publishSnapshot = onSnapshot(q, (querySnapshot) => {
    let html = '';
    const containerPost = document.querySelector('.main__div-postPeople');
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const dataDoc = doc.data();
      html += `
      <section class="main__section-postPeople" id="">
        <img class="section-postPeople__photoUser" src="${getCurrentUser().photoURL}">
          <h3>${dataDoc.user}.</h3>
          <p id="postHour">Publicado a las: ${dataDoc.dateTime}</p>
          <p>${dataDoc.content}</p>
          <figure>
          <img class="post2Img" src="../images/fondoInicio4.jpg">
          </figure>
        </section>
      `;
      containerPost.innerHTML = html;
    });
  });
};

// Funcion para cerrar sesión
export const loginOutUser = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/login';
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};
