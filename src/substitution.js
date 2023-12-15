// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    // create a set to check for unic charactersin the substituion alpha
    const alphabetSet = new Set(alphabet);
    // check if the substitution alphabet has exactly 26 unique characters
    if (alphabetSet.size !== 26 || alphabet === undefined || !alphabet) {
      return false;
    }
    // storing the final result
    let result = '';
    if (encode) {
      // the loop iterates throught each character in the input
      for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        let index = standardAlphabet.indexOf(letter);
        // If encoding, find the index of the letter in the standard alphabet
        // and replace it with the corresponding letter in the substitution alphabet
        if (index === -1) {
          // If the character is not in the standard alphabet, it will keep unchanged
          result += letter;
        } else {
          result += alphabet[index];
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        let index = alphabet.indexOf(letter);
        // If decoding, find the index of the letter in the substitution alphabet
        // and replace it with the corresponding letter in the standard alphabet
        if (index === -1) {
          // If the character is not in the substitution alphabet,it will keep unchanged
          result += letter;
        } else {
          result += standardAlphabet[index];
        }
      }
    }
    // return the final input
    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
