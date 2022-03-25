import { Login } from './Login.js';
import { registerUser } from '../lib/librariesfirebase.js';

export const Register = () => {
    document.getElementById('divIngresar').innerHTML = `
    <div id="divLogo">
  <img src="images/logo-fit-women.png" class="logo"/>
  </div>
  <div class="div__Username">
  <i class="fa-solid fa-circle-info e-mailIcon"></i>
  <input type="text" class="Register__input"  id="name" placeholder="Nombres y apellidos"></input>
  </div>
  <div class="div__Username">
  <i class="fa-solid fa-envelope e-mailIcon"></i>
  <input type="text" class="Register__input" id="e-mail" placeholder="Correo electrónico"></input>
  </div>
  <div class="div__Username">
  <i class="fa-solid fa-lock passwordIcon"></i>
  <input type="password" class="Register__input" id="password" placeholder="Contraseña"></input>
  </div>
  <div class="div__Username">
  <i class="fa-solid fa-lock passwordIcon"></i>
  <input type="password" class="Register__input" id="confirmPassword" placeholder="Confirmar contraseña"></input>
  </div>
  <button class="Register__button" id="register">Registrarse</button><br>
  <i class="fa-solid fa-circle-chevron-left" id="Register__iconBack"></i>`;
  
    
    // const register = document.getElementById("register");
    // register.addEventListener('click', () => {
    //   const valueOfEmail= document.getElementById("e-mail").value;
    //   const valueOfconfirmPassword= document.getElementById("confirmPassword").value;
    //   console.log(valueOfEmail, valueOfconfirmPassword)

    //   auth
    //   .createUserWithEmailAndPassword(valueOfEmail, valueOfconfirmPassword)
    //   .then( userCredential => {
    //     console.log('Sign up')
    //   });
    // });
    
    document.getElementById('Register__iconBack').addEventListener('click', () => Login());
    document.getElementById('register').addEventListener('click', registerUser);
  };











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
