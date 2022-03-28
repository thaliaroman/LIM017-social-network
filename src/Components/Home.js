import { getCurrentUser, loginOutUser } from '../lib/librariesfirebase.js';

export const Home = () => {
  const user = getCurrentUser();
  const userName = user.displayName;

  document.getElementById('root').innerHTML = `
  <header class="header">
    <h3>${userName}</h3>
    <button id="house"><i class="fa-solid fa-house-chimney icon__header"></i></button>
    <button id="friends"><i class="fa-solid fa-users icon__header"></i></button>
    <button id="loginOut"><i class="fa-solid fa-power-off out"></i> Cerrar sesión </button>
  </header>
  <main class="main">
    <div id="post">PUBLICACIONES</div>
  </main>`;
  const loginOut = document.getElementById('loginOut');
  loginOut.addEventListener('click', () => loginOutUser());
};
