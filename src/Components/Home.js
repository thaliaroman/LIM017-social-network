// // eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';

// export const Home = () => {
//   const HomeDiv = document.createElement('div');
//   const buttonRegister = document.createElement('button');
//   const buttonLogin = document.createElement('button');

//   buttonRegister.textContent = 'Registrate';
//   buttonLogin.textContent = 'Inicia sesión';

//   buttonRegister.addEventListener('click', () => onNavigate('/register'));
//   buttonLogin.addEventListener('click', () => onNavigate('/login'));

//   HomeDiv.appendChild(buttonRegister);
//   HomeDiv.appendChild(buttonLogin);

//   return HomeDiv;
// };


import { Login } from './Login.js';
import { Register } from './Register.js';

export const Home = () => {
  document.getElementById('root').innerHTML = `<h2>hola, bienvenida a fit woman</h2>
  <button id="iniciar">Iniciar sesión</button>
  <button id="registro">Registrarse</button>`;

  document.getElementById('iniciar').addEventListener('click', () => Login());
  document.getElementById('registro').addEventListener('click', () => Register());
};
