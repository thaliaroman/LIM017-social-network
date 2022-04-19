/**
 * @jest-environment jsdom
 */
import {
  register, login, printPost, observatorIt,
} from '../../src/lib/controllers.js';

import {
  loginUser,
} from '../../src/lib/libraries-Firebase.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});

describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  // login llama al metodo singIn de Firebase y recibe los valores de email y password
  it('debería llamar al método y recibir email & password', () => {
    document.body.innerHTML = `<p id="e-mailLogin">example@example.com</p>
    <p id="passwordLogin">example123</p>`;
    expect(login()).not.toBeNull();
  });
  // login si es true retorna userCredential

  // login si es false retorna error.
});

describe('printPost', () => {
  it('debería ser una función', () => {
    expect(typeof printPost).toBe('function');
  });
});

describe('observatorIt', () => {
  it('debería ser una función', () => {
    expect(typeof observatorIt).toBe('function');
  });
});
