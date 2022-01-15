const { describe, it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('testa a função sum: ', () => {
  it('Testa se sum(4, 5) reetorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  
  it('Testa se sum(0, 0) reetorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it('Testa se sum(4, "5") reetorna 0', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
