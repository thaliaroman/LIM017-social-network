// import { Login } from './Login.js';
// import { Register } from './Register.js';

// export const Home = () => {
//   document.getElementById('root').innerHTML = `
//   <input type=text id="correo" placeholder="Correo electrónico"></input><br><br>
//   <input type=password id="contraseña" placeholder="contraseña"></input><br><br>
//   <button id="iniciar">Iniciar sesión</button> <br><br><br><br><br>
//   <button id="google">Continuar con Google</button> <br>
//   <p id="o">ó</p>
//   <p id="registro">Registrarse en Fit Women</p> <br>`;

//   document.getElementById('iniciar').addEventListener('click', () => Login());
//   document.getElementById('registro').addEventListener('click', () => Register());
// };

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
  document.getElementById('root').innerHTML = `
  <input type=text id="correo" placeholder="Correo electrónico"></input><br><br>
  <input type=password id="contraseña" placeholder="Contraseña"></input><br><br>
  <button id="iniciar">Iniciar sesión</button> <br><br><br><br><br>
  <button id="google">Continuar con Google</button> <br>
  <p id="o">ó</p>
  <p id="registro">Registrarse en Fit Women</p> <br>`;

  document.getElementById('iniciar').addEventListener('click', () => Login());
  document.getElementById('registro').addEventListener('click', () => Register());
};
