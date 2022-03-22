// eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../main.js';

// export const Register = () => {
//   const HomeDiv = document.createElement('div');
//   HomeDiv.textContent = 'Bienvenida al Resgistro';
//   const buttonHome = document.createElement('button');

//   buttonHome.textContent = 'Regresar al Home';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   HomeDiv.appendChild(buttonHome);

//   return HomeDiv;
// };


export const Register = () => {
    document.getElementById('root').innerHTML = `
    <input type="text" id="name" placeholder="Nombres y apellidos"</input><br><br>
    <input type="text" id="e-mail" placeholder="Correo electrónico"</input><br><br>
    <input type="password" id="password" placeholder="contraseña"</input><br><br>
    <input type="password" id="confirmPassword" placeholder="Confirmar contraseña"</input><br><br>
    <button>Registrarse</button>
    `;
  };