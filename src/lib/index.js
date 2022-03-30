// // importando las funciones que necesito
import { Register } from '../Components/Register.js';
import { Login } from '../Components/Login.js';
import { app } from './configurationfirebase.js';
import { Home } from '../Components/Home.js';

// Carga por defecto
const d = document;
d.addEventListener('DOMContentLoaded', Home);

// aqui exportaras las funciones que necesites
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
console.log(app);
