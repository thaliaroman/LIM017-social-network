import { Login } from '../../src/Components/Login.js';
import { signInWithEmailAndPassword, signInWithPopup } from '../../src/lib/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Login', () => {
  beforeEach(() => signInWithEmailAndPassword.mockClear());
  it('inicia sesión correctamente llamando al método signInWithEmailAndPassword', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Login();
    document.getElementById('e-mailLogin').value = 'gaga@gmail.com';
    document.getElementById('passwordLogin').value = 'gaga123';
    const botonLogin = document.getElementById('iniciar');
    botonLogin.dispatchEvent(new Event('click'));
    console.log(signInWithEmailAndPassword.mock.calls[0]);
    expect(document.getElementById('passwordLogin').value).toBe('gaga123');
    expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([{}, 'gaga@gmail.com', 'gaga123']);
  });
  it('se llama a la función de entrar con google signInWithPopup', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Login();
    const loginGoogleButton = document.getElementById('google');
    loginGoogleButton.dispatchEvent(new Event('click'));
    console.log(signInWithPopup.mock.calls[0]);
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
  it('devuelve un error de firebase', (done) => {
    signInWithEmailAndPassword.mockRejectedValue({ code: 'auth/user-not-found' });
    document.body.innerHTML = '<div id="root"></div>';
    Login();
    document.getElementById('e-mailLogin').value = 'gaga@gmail.com';
    document.getElementById('passwordLogin').value = 'gaga1234567899';
    const botonLogin = document.getElementById('iniciar');
    botonLogin.dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.getElementById('alertErrorEmail-Login').textContent).toEqual(' El usuario no ha sido encontrado');
      done();
    });
  });
});
