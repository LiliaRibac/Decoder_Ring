// Write your tests here!
const chai = require('chai');
const { expect } = chai;
const { caesar } = require('../src/caesar');

describe('caesar()', () => {
  it('should encode "thinkful" with a shift of 3', () => {
    const result = caesar('thinkful', 3);
    expect(result).to.eql('wklqnixo');
  });
  it('should decode "thinkful" with a shift of -3', () => {
    const result = caesar('thinkful', -3);
    expect(result).to.eql('qefkhcri');
  });
  it('should decode "wklqnixo" with a shift of 3 false', () => {
    const result = caesar('wklqnixo', 3, false);
    expect(result).to.eql('thinkful');
  });
  it('should encode "This is a secret message!", 8', () => {
    const result = caesar('This is a secret message!', 8);
    expect(result).to.eql('bpqa qa i amkzmb umaaiom!');
  });
  it('should decode "BPQA qa I amkzmb umaaiom!", 8, false', () => {
    const result = caesar('BPQA qa I amkzmb umaaiom!', 8, false);
    expect(result).to.eql('this is a secret message!');
  });
  it("should return false if the shift parameter isn't present", () => {
    const result = caesar('thinkful');
    expect(result).to.be.false;
  });
  it('should return false for "thinkful" with  a shift of 99', () => {
    const result = caesar('thinkful', 99);
    expect(result).to.be.false;
  });
  it('should return false for "thinkful" with  a shift of -26', () => {
    const result = caesar('thinkful', -26);
    expect(result).to.be.false;
  });
  it('should return false for "thinkful" with  a shift is 0', () => {
    const result = caesar('thinkful', 0);
    expect(result).to.be.false;
  });
});
