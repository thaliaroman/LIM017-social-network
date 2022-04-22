import { Login } from '../../src/Components/Login.js';
import { signInWithEmailAndPassword } from '../../src/lib/Firebase-Import.js';
import { loginUser } from '../../src/lib/libraries-Firebase.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Login', () => {
  beforeEach(() => signInWithEmailAndPassword.mockClear());
  it('es true', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Login();
    document.getElementById('e-mailLogin').value = 'gaga@gmail.com';
    document.getElementById('passwordLogin').value = 'gaga123';
    const botonLogin = document.getElementById('iniciar');
    botonLogin.dispatchEvent(new Event('click'));
    expect(document.getElementById('passwordLogin').value).toBe('gaga123');
    expect(signInWithEmailAndPassword.mock.calls[0]).toEqual([Object, 'gaga@gmail.com', 'gaga123']);
  });
});
