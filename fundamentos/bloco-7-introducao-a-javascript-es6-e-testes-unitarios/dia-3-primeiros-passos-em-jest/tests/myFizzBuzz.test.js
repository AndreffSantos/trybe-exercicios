const { describe, it, expect } = require('@jest/globals');
const myFizzBuzz = require('../myFizzBuzz');

describe('testando a função myFizzBuzz', () => {
  it('teste', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('teste', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('test', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('test', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('test', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});