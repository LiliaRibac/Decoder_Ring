// Write your tests here!
const chai = require('chai');
const { expect } = chai;
const { polybius } = require('../src/polybius');

describe('polybius', () => {
  it('shoud encode a message by translating each latter to the number pair', () => {
    const encodMessage = polybius('thinkful');
    expect(encodMessage).to.equal('4432423352125413');
  });
  it('shoud leave the spaces as is when encoding', () => {
    const encodMessage = polybius('hello world!');
    expect(encodMessage).to.equal('3251131343 2543241341!');
  });
  it('shoud translate bouth "i", "j" to 42', () => {
    const encodMessage = polybius('Just think');
    expect(encodMessage).to.equal('42543444 4432423352');
  });
  it('should decode a messageby translating each pair of numbers into a letter', () => {
    const decodMessage = polybius('4432423352125413', false);
    expect(decodMessage).to.equal('th(i/j)nkful');
  });
  it('should return false if the number of charaters is even', () => {
    const decodMessage = polybius('44324233521254131', false);
    expect(decodMessage).to.be.false;
  });
  it('shoud leave the spaces as is when encoding and ignore capital latters', () => {
    const decodMessage = polybius('Hello World!');
    expect(decodMessage).to.equal('3251131343 2543241341!');
  });
});
