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
      <p>Bienvenida al Registro</p>
    <button>Registrarse</button>
    <button>Registrarse con Google</button>
    `;
  };