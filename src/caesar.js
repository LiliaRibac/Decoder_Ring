// // Please refrain from tampering with the setup code provided here,
// // as the index.html and test files rely on this setup to work properly.
// // Only add code (helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // let letters = 'abcdefghijklmnopqrstuvwxyz';

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
      return false;
    }
    // Define the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Convert the input to lowercase for case-insensitivity
    const inputLowerCase = input.toLowerCase();

    // Define the function for shifting a single character
    function shiftCharacter(char, shift) {
      const charIndex = alphabet.indexOf(char);

      // If the character is not in the alphabet, return it unchanged
      if (charIndex === -1) {
        return char;
      }

      // Calculate the shifted index
      let shiftedIndex = (charIndex + shift) % 26;

      // Handle negative indices
      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }

      // Return the shifted character
      return alphabet[shiftedIndex];
    }

    // Encode or decode the message
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const currentChar = inputLowerCase[i];

      // Check if the current character is alphabetic
      if (/[a-z]/.test(currentChar)) {
        // Shift the character based on the encode parameter
        result += encode
          ? shiftCharacter(currentChar, shift)
          : shiftCharacter(currentChar, -shift);
      } else {
        // If the character is non-alphabetic, keep it unchanged
        result += currentChar;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
