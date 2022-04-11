import { register } from '../lib/controllers.js';

export const Register = () => {
  document.getElementById('root').innerHTML = `
  <div class="div__imageLogin"><img src="images/fondoInicio5.png" class="imageLogin"/></div>
    <div id="divIngresar">
      <div id="divLogo">
        <img src="images/logo-fit-women.png" class="logo"/>
      </div>
      <div class="div__Username">
        <i class="fa-solid fa-circle-info e-mailIcon"></i>
        <input type="text" class="Register__input"  id="name" placeholder="Nombres y apellidos"></input>
      </div>
      <div class="div__Username">
        <i class="fa-solid fa-envelope e-mailIcon"></i>
        <input type="email" class="Register__input" id="e-mail" placeholder="Correo electrónico"></input>
        <p id="alertErrorEmail-Register"></p>
      </div>
      <div class="div__Username">
        <i class="fa-solid fa-lock passwordIcon"></i>
        <input type="password" class="Register__input" id="password" placeholder="Contraseña"></input>
      </div>
      <div class="div__Username">
        <i class="fa-solid fa-lock passwordIcon"></i>
        <input type="password" class="Register__input" id="confirmPassword" placeholder="Confirmar contraseña"></input>
        <p id="alertErrorPassword-Register"></p>
      </div>
    <button class="Register__button" id="register">Registrarse</button><br>
    <i class="fa-solid fa-circle-chevron-left" id="Register__iconBack"></i>
  </div>
  `;

  // const valueOfPassword = document.getElementById('password').value;
  // const valueOfconfirmPassword = document.getElementById('confirmPassword').value;
  // console.log(valueOfPassword, valueOfconfirmPassword);
  document.getElementById('Register__iconBack').addEventListener('click', () => {
    window.location.hash = '#/login';
  });

  document.getElementById('register').addEventListener('click', register);
};









// <span data-error="correo incorrecto" data-success="right"></span>

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
