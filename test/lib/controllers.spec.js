/**
 * @jest-environment jsdom
 */
import {
  register, login, printPost, observatorIt,
} from '../../src/lib/controllers.js';

import { loginUser, registerUser } from '../../src/lib/libraries-Firebase.js';

jest.mock('../../src/lib/Firebase-Import.js');

// Testeando register y sus funciones implicadas.
describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
  // recibe valores que van a ser parámetros de la función registerUser.
  // it('debería recibir valores para registrar el usuario', () => {
  //   document.body.innerHTML = `<p id="e-mail" value="example@example.com">example@example.com</p>
  //   <p id="password" value="example123">example123</p>
  //   <p id="confirmPassword" value="example123">example123</p>
  //   <p id="name" value="example example">example example</p>`;
  //   expect('example example').toEqual(expect.stringContaining(register));
  // });
});

describe('registerUser', () => {
  it('Debería poder registrar un usuario', () => registerUser('front@end.la', '123456')
    .then((userCredential) => {
      expect('front@end.la').toBe(userCredential.user.email);
    }));
});

// iniciar sesión
describe('login', () => {
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  // llama a la función loginUser que contiene el metodo de firebase
  // it('debería llamar a loginUser', () => {
  //   expect(loginUser()).toHaveBeenCalled();
  // });
  // recibe los valores de email y password y los convierte en parámetros de loginUser
  // it('debería recibir email & password', () => {
  //   document.body.innerHTML = `<p id="e-mailLogin" value="example@example.com">example@example.com</p>
  //   <p id="passwordLogin" value="example123">example123</p>`;
  //   expect().toEqual(expect.stringContaining());
  // });
  // login si es true retorna userCredential

  // login si es false retorna error.
});

describe('loginUser', () => {
  it('Debería poder iniciar sesion', () => loginUser('front@end.la', '123456')
    .then((userCredential) => {
      expect('front@end.la').toBe(userCredential.user.email);
    }));
});

// imprimir post
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
