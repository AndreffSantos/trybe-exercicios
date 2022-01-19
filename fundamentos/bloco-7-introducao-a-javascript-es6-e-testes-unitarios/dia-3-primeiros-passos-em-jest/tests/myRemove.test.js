const { describe, it, expect } = require('@jest/globals');
const myRemove = require('../myRemove');

describe('testa a função myRemove', () => {
  it('testa o rotorno de myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1 ,2, 4]);
  });

  it('testa', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('testa o rotorno de myRemove([1, 2, 3, 4], 3) e 5', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});