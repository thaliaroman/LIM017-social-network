import { Login } from "./Login.js";

export const Register = () => {
    document.getElementById('divIngresar').innerHTML = `
  <input type="text" class="Register__input"  id="name" placeholder="Nombres y apellidos"</input><br><br>
  <input type="text" class="Register__input" id="e-mail" placeholder="Correo electrónico"</input><br><br>
  <input type="password" class="Register__input" id="password" placeholder="Contraseña"</input><br><br>
  <input type="password" class="Register__input" id="confirmPassword" placeholder="Confirmar contraseña"</input><br><br>
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
