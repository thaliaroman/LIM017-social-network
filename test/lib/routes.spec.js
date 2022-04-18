/**
 * @jest-environment jsdom
 */
import { routes } from '../../src/lib/routes';

jest.mock('../../src/lib/Firebase-Import.js');

describe('routes', () => {
  it('debería ser una función', () => {
    expect(typeof routes).toBe('function');
  });
  it('debe mostrar una vista: login', () => {
    // Creando vista Login para test
    document.body.innerHTML = `<div id="root"></div>`;
    routes('#/login');

    // const loginTest = () => {
    //   const login = '<div><p>Hola estamos en el login Test</p></div>';
    //   return login;
    // };
    expect(document.body.querySelector('#divIngresar')).not.toBeNull();
  });
});
