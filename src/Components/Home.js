/* eslint-disable no-restricted-syntax */
import {
  getCurrentUser, loginOutUser, toPost, loadPosts,
} from '../lib/librariesfirebase.js';

// const publish = async () => {
//   toPost();
//   const posts = await loadPosts();
  // console.log(posts);
  // const postsBlock = document.getElementById('publicaciones');
  // let finalPosts = '';

  // for (const publi of posts) {
  //   const user = publi.user;
  //   const content = publi.content;
  //   const time = publi.datetime;
  //   const postHtml = `
  //     <div class="post">
  //       <h4>${user}</h4>
  //       <p id="content">${content}</p>
  //       <p id="time">${new Date(time.seconds * 1000).toTimeString()}</p>
  //     </div></br>
  //     `;
  //   finalPosts += postHtml;
  // }

  // postsBlock.innerHTML = loadPosts;
// };

export const Home = () => {
  const user = getCurrentUser();
  console.log('del home', getCurrentUser().email);
  const userName = user.displayName.charAt(0).toUpperCase();
  // const userPhoto = user.photoURL;
  loadPosts();

  document.getElementById('root').innerHTML = `
  <header class="header">
  <div class="header__logo-div"><img class="header__logo" src="../images/icono-header.png"></div>
    <button id="userName">${userName}</button>
    <nav class="header__nav">
      <ul class="header__nav-ul>
        <li class="header__nav-ul-li" id="house"><i class="fa-solid fa-house-chimney icon__header"></i></li>
        <li class="header__nav-ul-li" id="friends"><i class="fa-solid fa-users icon__header"></i></li>
        <li class="header__nav-ul-li" id="loginOut"><i class="fa-solid fa-power-off out icon__header"></i></li> 
      </ul>
    </nav>
  </header>
  <main class="main">
    <div class="main__div" id="post">
    <input class="post__input" type="text" placeholder="Cuéntanos lo que estás pensando . . ."></input>
    <button class="post__button">Publicar</button>
    </div>
    <div id="publicaciones">
    </div>
    <div class="main__div-postPeople">
     
    </div>
  </main>`;

  const loginOut = document.getElementById('loginOut');
  loginOut.addEventListener('click', () => loginOutUser());

  const userPost = document.querySelector('.post__button');
  userPost.addEventListener('click', () => {
    toPost();
  });
};

// -----------------------------//
// COSAS QUE NO ESTAMOS USANDO //
// ---------------------------//
  // function shortName(string) {
  //   const palabras = string;
  //   const array = palabras.split(' ');
  //   let resultado = '';
  //   // eslint-disable-next-line no-plusplus
  //   for (let i = 0; i < array.length; i++) {
  //     resultado += array[i][0];
  //   }
  //   return resultado;
  // }
