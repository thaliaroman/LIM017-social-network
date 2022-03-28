// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { routes } from './lib/routes.js';

myFunction();
const init = () => {
    window.location.hash = '#/home';
    routes(window.location.hash);
    // observador();
  };
  init();
  
  // Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
  // window.addEventListener('load', init);
  
  /*  El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado. */
  window.addEventListener('hashchange', () => {
    routes(window.location.hash);
  });
