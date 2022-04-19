// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './lib/routes.js';
import { observatorIt } from './lib/controllers.js';

myFunction();

// const init = () => {
//   routes(window.location.hash);
//   window.location.hash = '#/login';
// };
window.addEventListener('DOMContentLoaded', () => {
  observatorIt();
  console.log('okay');
});
console.log('afuera del evento');

// window.addEventListener(onpopstate)

/*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});
