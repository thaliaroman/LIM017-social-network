import { Login } from '../../src/Components/Login.js';
import { signInWithEmailAndPassword, signInWithPopup } from '../../src/lib/Firebase-Import.js';
import { loginUser, startGoogle } from '../../src/lib/libraries-Firebase.js';

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
  // it('se llama a la función de entrar con google signInWithPopup', () => {
  //   document.body.innerHTML = '<div id="root"></div>';
  //   Login();
  //   const loginGoogleButton = document.getElementById('google');
  // loginGoogleButton.dispatchEvent(new Event('click'));
  // console.log(signInWithPopup.mock.calls);
  // expect(signInWithPopup.mock.calls[0]).toEqual([{}, 'gag@gmail.com', 'gaga123']);
  // });
});
