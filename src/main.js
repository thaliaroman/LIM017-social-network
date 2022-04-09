// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './lib/routes.js';
import { Home } from './Components/Home.js';
import { observatorIt } from './lib/controllers.js';

myFunction();

const init = () => {
  routes(window.location.hash);
  window.location.hash = '#/login';
};
window.addEventListener('DOMContentLoaded', observatorIt(), init());

// Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
// window.addEventListener('load', init);

/*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
window.addEventListener('hashchange', () => {
  routes(window.location.hash);
});
