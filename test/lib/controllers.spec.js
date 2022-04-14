import { register } from '../../src/lib/controllers.js';

jest.mock('../../src/lib/Firebase-Import.js');

describe('resgister', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
});
