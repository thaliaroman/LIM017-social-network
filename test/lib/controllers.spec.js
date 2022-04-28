/**
 * @jest-environment jsdom
 */
import {
  register, login, printPost, observatorIt,
} from '../../src/lib/controllers.js';

import { loginUser, observator, registerUser } from '../../src/lib/libraries-Firebase.js';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  onAuthStateChanged, onSnapshot,
} from '../../src/lib/Firebase-Import.js';

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
  // Debería devolder error de firebase
  it('Debería devolder error de firebase', () => {
    document.body.innerHTML = '<div id="alertErrorPassword-Register"></div>';
    registerUser('front@end.la', '1234', 'fullname');
    createUserWithEmailAndPassword.mockRejectedValue({ error: { code: 'auth/weak-password' } });
    expect(document.getElementById('alertErrorPassword-Register').innerHTML).toEqual('La contraseña debe tener mínimo 6 caracteres');
  });
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
  it('llama a onSnapshot', () => {
    printPost();
    console.log(onSnapshot.mock.calls);
    expect(onSnapshot).toHaveBeenCalledTimes(1);
  });
});

describe('observatorIt', () => {
  it('debería ser una función', () => {
    expect(typeof observatorIt).toBe('function');
  });
  it('llama a observator', () => {
    observatorIt();
    console.log(onAuthStateChanged.mock.calls);
    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
  });
});
