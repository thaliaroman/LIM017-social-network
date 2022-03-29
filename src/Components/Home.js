import { getCurrentUser, loginOutUser } from '../lib/librariesfirebase.js';

export const Home = () => {
  const user = getCurrentUser();
  const userName = user.displayName.toUpperCase();
  console.log(typeof (userName));

  function shortName(string) {
    const palabras = string;
    const array = palabras.split(' ');
    console.log(array);
    let resultado = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      resultado += array[i][0];
    }
    console.log(resultado);
    return resultado;
  }

  document.getElementById('root').innerHTML = `
  
  <header class="header">
  <div class="header__icon-div"><img class="header__logo" src="../images/icono-header.png"></div>
    <p id="userName">${shortName(userName)}</p>
    <nav class="header__nav">
      <ul class="header__nav-ul>
        <li class="header__nav-ul-li" id="house"><i class="fa-solid fa-house-chimney icon__header"></i></li>
        <li class="header__nav-ul-li" id="friends"><i class="fa-solid fa-users icon__header"></i></li>
        <li class="header__nav-ul-li" id="loginOut"><i class="fa-solid fa-power-off out icon__header"></i></li> 
      </ul>
    </nav>
  </header>
  <main class="main">
    <div class="main__div" id="post">PUBLICACIONES</div>
  </main>`;
  const loginOut = document.getElementById('loginOut');
  loginOut.addEventListener('click', () => loginOutUser());
};
