import { Home } from '../../src/Components/Home.js';
import {
  addDoc, getCurrentUser, signOut, onSnapshot,
} from '../../src/lib/Firebase-Import.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Home', () => {
  beforeEach(() => signOut.mockClear());
  it('debería llamar a la función mock de CERRAR SESIÓN', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Home();
    expect(document.body.querySelector('#userName')).not.toBeNull();
    expect(getCurrentUser.mock.calls[0]).toEqual([]);
    const loginOutButton = document.getElementById('loginOut');
    loginOutButton.dispatchEvent(new Event('click'));
    expect(signOut.mock.calls[0]).toEqual([{}]);
  });
  it('debería llamar a la función mock de crear publicación', () => {
    const userPost = document.querySelector('.post__button');
    document.querySelector('.post__input').value = 'abc';
    userPost.dispatchEvent(new Event('click'));
    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(onSnapshot).toHaveBeenCalledTimes(1);
  });
});
