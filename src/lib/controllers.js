/* eslint-disable arrow-body-style */
import {
  // eslint-disable-next-line import/named
  registerUser,
  loginUser,
  updater, sendMail, startGoogle,
  Provider, loginOutUser, toPost, loadPosts, deletePost, getCurrentUser, observator, editPost,
  updatePost,
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
      // window.location.hash = '#/home';
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
      // window.location.hash = '#/home';
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
    // window.location.hash = '#/login';
  // Sign-out successful.
  }).catch((error) => {
  // An error happened.
  });
};

// publica el post
// statusOfEdition: ve el estado de la edición(actualización) y/o creción del documento de firestore
let statusOfEdition = false;
let id = '';
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
        </section>`;
      if (dataDoc.uid === getCurrentUser().uid) {
        html += `
        <button class="deletePost" data-id='${doc.id}'>Eliminar</button>
        <button class="editPost" data-id='${doc.id}'>Editar</button>`;
      } else {
        html += `
        <button class="deletePost" data-id=''>Dame like pe' ;v</button>`;
      }
    });
    containerPost.innerHTML = html;
    // borra documento del post
    const buttonDelete = containerPost.querySelectorAll('.deletePost');
    buttonDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });
    // editar post
    const buttonEdit = containerPost.querySelectorAll('.editPost');
    buttonEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await editPost(e.target.dataset.id);
        // devuelve los datos del documento de firestore
        const infoDocToEdit = doc.data();
        const contentPost = document.querySelector('.post__input');
        // consigue el valor del input y lo devuelve como dice en el documento de firestore
        contentPost.value = infoDocToEdit.content;
        // cambia el estado de la edición a true
        statusOfEdition = true;
        id = doc.id;
      });
    });
  }
  loadPosts(idk);
};

// Crea un documento en la coleccion de firestore
export const toPostDocument = async () => {
  // const user = auth.currentUser;
  const contentPost = document.querySelector('.post__input').value;
  if (!statusOfEdition) {
    const docRef = await toPost(contentPost);
    console.log(docRef.id);
  // console.log(docRef.data().uid);
  } else {
    updatePost(id, { content: contentPost });
  }
};

// // observator
export const observatorIt = () => {
  function userftn(user) {
    if (user) {
      console.log(user.uid, user.displayName);
      window.location.hash = '#/home';
    } else {
      console.log('no');
      window.location.hash = '#/login';
    }
  }
  observator(userftn);
};
