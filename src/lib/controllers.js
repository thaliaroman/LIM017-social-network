/* eslint-disable arrow-body-style */
import {
  // eslint-disable-next-line import/named
  registerUser,
  loginUser,
  updater, sendMail, startGoogle, Provider, loginOutUser, toPost, loadPosts, deletePost, getCurrentUser,
} from './libraries-Firebase.js';

// Registra nuevos usuarios
export const register = () => {
  const email = document.getElementById('e-mail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const fullName = document.getElementById('name').value;
  if (password === confirmPassword) {
    registerUser(email, password, fullName)
      .then((userCredential) => {
        updater(fullName);
        sendMail();
        window.location.hash = '/login';
        return userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Code: ${errorCode}`);
        console.log(`Message: ${errorMessage}`);
      });
  } else {
    // eslint-disable-next-line no-alert
    alert('No coincide la contraseña');
  }
};

// Logea usuarios registrados
export const login = () => {
  const email = document.getElementById('e-mailLogin').value;
  const password = document.getElementById('passwordLogin').value;
  loginUser(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.hash = '#/home';
      // ...
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

// Inicia sesión con Google
export const loginGoogle = () => {
  startGoogle(new Provider())
    .then(() => {
      window.location.hash = '#/home';
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = Provider.credentialFromError(error);
      // ...
    });
};

// Cierra sesión
export const loginOut = () => {
  loginOutUser().then(() => {
    window.location.hash = '#/login';
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};

// Crea un documento en la coleccion de firestore
export const toPostDocument = () => {
  // const user = auth.currentUser;
  const contentPost = document.querySelector('.post__input').value;
  return toPost(contentPost).then((docRef) => {
    console.log(docRef.id.uid);
  });
};

// publica el post
export const printPost = () => {
  function idk(querySnapshot) {
    const containerPost = document.querySelector('.main__div-postPeople');
    let html = '';
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
        <button class="deletePost" data-id='${doc.id}'>Eliminar</button>
      </section>`;
    });
    containerPost.innerHTML = html;
    // borra documento del post
    const buttonDelete = containerPost.querySelectorAll('.deletePost');
    if (dataDoc.uid === getCurrentUser().uid) {
      // buttonDelete.style.display = 'flex';
      buttonDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deletePost(dataset.id);
        });
      });
    } else {
      console.log('funciona');
    }
  }
  loadPosts(idk);
};
