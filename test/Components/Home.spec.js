import { Home } from '../../src/Components/Home.js';
import { addDoc, getCurrentUser, signOut } from '../../src/lib/Firebase-Import.js';
import { printPost, toPostDocument } from '../../src/lib/controllers.js';

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
  });
  // it.only('debería llamar a eliminar post', () => {
  //   document.body.innerHTML = '<div id="root"></div>';
  //   Home();
  //   // const buttonDelete = containerPost.querySelectorAll('.deletePost');
  //   // eslint-disable-next-line no-unused-expressions
  //   expect(document.body.querySelector('.deletePost')).not.toBeNull();
  // });
});
