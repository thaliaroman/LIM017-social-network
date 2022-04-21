import { Register } from '../../src/Components/Register.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('Register', () => {
  it('debería recibir email & password', () => {
    document.body.innerHTML = '<div id="root"></div>';
    Register();

    // expect(createUserWithEmailAndPassword.mock.calls[0]).toEqual([{ languageCode: 'es' }, 'front@end.la', '123456']);
  });
});

// btn = document.getElementById()
// btn.dispatchEvent(new Event('click'));
// document.getElemenetById('e-mail').value = 'front@end..la';
