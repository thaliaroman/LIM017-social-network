// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './lib/routes.js';
import { observatorIt } from './lib/controllers.js';
import { observator } from './lib/libraries-Firebase.js';

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

// window.addEventListener('popstate', (event) => {
//   console.log(event);
// });

/*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
window.addEventListener('hashchange', () => {
  console.log('hashchange');
  observator((user) => {
    if (user) {
      routes('#/home');
    } else if (!user && window.location.hash === '#/home') {
      routes('#/login');
    } else {
      routes(window.location.hash);
    }
  });
  // routes(window.location.hash);
});
