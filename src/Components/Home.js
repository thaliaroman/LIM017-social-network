/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
import {
  getCurrentUser, loginOutUser,
} from '../lib/libraries-Firebase.js';
import {
  toPostDocument, printPost,
} from '../lib/controllers.js';

export const Home = () => {
  const user = getCurrentUser();
  const userName = user.displayName.charAt(0).toUpperCase();
  printPost();
  console.log(user.photoURL);

  // if (typeof (Storage) !== 'undefined') {
  //   console.log('si es compatible');
  // } else {
  //   console.log('no es compatible');
  // }
  // localStorage.name = getCurrentUser().displayName;
  // console.log(localStorage.name);

  // función que convierte a mayusculas las primeras letras del nombre de usuario
  const abcName = () => {
    const userABC = user.displayName;
    return userABC.replace(/\b\w/g, (l) => l.toUpperCase());
  };
  const htmlRoot = document.getElementById('root');
  let html = '';
  html += `
  <header class="header">
    <div class="header__logo-div">
      <img class="header__logo" src="../images/icono-header.png">
    </div>
    <div class="header__nav-div">
      <nav class="header__nav">
        <ul class="header__nav-ul>
          <li class="header__nav-ul-li" id="house"><i class="fa-solid fa-house-chimney icon__header"></i></li>
          <li class="header__nav-ul-li" id="friends"><i class="fa-solid fa-users icon__header"></i></li>
          <li class="header__nav-ul-li" id="loginOut"><i class="fa-solid fa-power-off out icon__header"></i></li> 
        </ul>
      </nav>
    </div>
    <div class="header__user-div">
      <button id="userName" title="${user.displayName}">${userName}</button>
    </div>
  </header>
  <div class="mainandaside">
    <aside class="aside_d">`;
  if (user.photoURL !== null) {
    html += `<img src='${user.photoURL}'>`;
  } else {
    html += `<button id="userName" title="${user.displayName}">${userName}</button>`;
  }
  html += `
      <p>${abcName()}</p>
    </aside>
    <main class="main">
      <div class="main__div" id="post">
        <textarea cols="5" rows="5" class="post__input" id="inputPost__edit" type="text" placeholder="Cuéntanos lo que estás pensando . . ."></textarea>
        <div class="post__div-upPhoto">
          <label class="elements__div-upPhoto" for="upPhoto"><i class="fa-solid fa-images"></i></label>
          <input class="elements__div-upPhoto" type="file" hidden="" id="upPhoto"></input>
          <p>Foto</p>
        </div>
        <button class="post__button">Publicar</button>
      </div>    
      <div class="main__div-postPeople">
      </div>
    </main>
  </div>`;

  htmlRoot.innerHTML = html;
  // Boton para cerrar sesión
  const loginOutButton = document.getElementById('loginOut');
  loginOutButton.addEventListener('click', () => loginOutUser());

  // Botón para publicar post
  const userPost = document.querySelector('.post__button');
  userPost.addEventListener('click', () => {
    if (document.querySelector('.post__input').value !== '') {
      toPostDocument();
      document.querySelector('.post__input').value = '';
    }
  });
};
// <button id="userName" title="${user.displayName}">${userName}</button>
