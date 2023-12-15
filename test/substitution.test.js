// Write your tests here!

const chai = require('chai');
const { expect } = chai;
const { substitution } = require('../src/substitution');

describe('substitution', () => {
  it('should decode message', () => {
    const result = substitution('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false);
    expect(result).to.eql('message');
  });
  it('should decode message', () => {
    const result = substitution(
      'jrufscpw',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    expect(result).to.eql('thinkful');
  });
  it('should encode message that has space in it', () => {
    const result = substitution(
      'you are an excellent spy',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    expect(result).to.eql('elp xhm xf mbymwwmfj dne');
  });
  it('should decode message that has space in it', () => {
    const result = substitution(
      'elp xhm xf mbymwwmfj dne',
      'xoyqmcgrukswaflnthdjpzibev',
      false
    );
    expect(result).to.eql('you are an excellent spy');
  });
  it('should egnore the capital letters', () => {
    const result = substitution(
      'You are an Excellent Spy',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    expect(result).to.eql('Ylp xhm xf Ebymwwmfj Sne');
  });
  it("should return false if the alphabet parameter isn't 26 characters", () => {
    const result = substitution('hello world', 'sdfsgshort');
    expect(result).to.be.false;
  });
  it("should return false if the alphabet parameter isn't 26 characters", () => {
    const result = substitution('hello world', 'sdfsgshort');
    expect(result).to.be.false;
  });
  it('should return false if the alphabet parameter dublicat characters', () => {
    const result = substitution('hello world', 'sdfsgshortshort');
    expect(result).to.be.false;
  });
  it('should work with any special characters', () => {
    const result = substitution(
      '!@hello $#&world',
      'xoyqmcgrukswaflnthdjpzibev'
    );
    expect(result).to.eql('!@rmwwl $#&ilhwq');
  });
});
