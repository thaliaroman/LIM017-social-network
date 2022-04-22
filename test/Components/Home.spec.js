import { Home } from '../../src/Components/Home.js';
import { getCurrentUser, signOut } from '../../src/lib/Firebase-Import.js';
import { toPostDocument, } from '../../src/lib/controllers.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Home', () => {
  it('debería renderizar el Home', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Home();
    expect(document.body.querySelector('#userName')).not.toBeNull();
    expect(getCurrentUser.mock.calls[0]).toEqual([]);
    const loginOutButton = document.getElementById('loginOut');
    loginOutButton.dispatchEvent(new Event('click'));
    expect(signOut.mock.calls[0]).toEqual([{}]);    
  });
  it('debería cerrar la sesión del usuario', () => {
    const userPost = document.querySelector('.post__button');
    userPost.dispatchEvent(new Event('click'));
  });
});
