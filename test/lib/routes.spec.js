/* eslint-disable eol-last */
/**
 * @jest-environment jsdom
 */
import { routes } from '../../src/lib/routes';

// import { getCurrentUser } from '../../src/lib/__mocks__/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('routes', () => {
  beforeEach(() => { document.body.innerHTML = '<div id="root"></div>'; });
  it('debe mostrar la vista: login', () => {
    routes('#/login');
    expect(document.body.querySelector('#divIngresar')).not.toBeNull();
  });
  it('debe mostrar la vista: register', () => {
    routes('#/register');
    expect(document.body.querySelector('#name')).not.toBeNull();
  });
  it('debe mostrar la vista: home', () => {
    routes('#/home');
    // console.log(getCurrentUser());
    expect(document.body.querySelector('.header__nav-div')).not.toBeNull();
  });
  it('debe mostrar página no disponible', () => {
    routes('#/othername');
    // console.log(getCurrentUser());
    expect(document.body.querySelector('#root').textContent).toBe('Esta página no esta disponible');
  });
});