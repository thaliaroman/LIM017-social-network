/**
 * @jest-environment jsdom
 */
import {
  register, login, printPost, observatorIt,
} from '../../src/lib/controllers.js';

import { loginUser, registerUser } from '../../src/lib/libraries-Firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../src/lib/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

// REGISTER: Testeando register y sus funciones implicadas.
describe('register', () => {
  beforeEach(() => createUserWithEmailAndPassword.mockClear());
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
  // RegisterUser llama a createUserWithEmailAndPassword
  it('Debería devolder el correo de registro', () => registerUser('front@end.la', '123456', 'fullname')
    .then((userCredential) => {
      expect(userCredential.user.email).toBe('front@end.la');
      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(createUserWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'front@end.la', '123456']);
    }));
});

// iniciar sesión
describe('login', () => {
  beforeEach(() => signInWithEmailAndPassword.mockClear());
  it('debería ser una función', () => {
    expect(typeof login).toBe('function');
  });
  // Login User llama a createUserWithEmailAndPassword
  it('Debería poder iniciar sesion', () => loginUser('login@end.la', '123456')
    .then((userCredential) => {
      expect(userCredential.user.email).toBe('login@end.la');
      expect(signInWithEmailAndPassword).toHaveBeenCalled();
      console.log(signInWithEmailAndPassword.mock.calls);
      expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'login@end.la', '123456']);
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
