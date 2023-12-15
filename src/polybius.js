// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const squareForEncoding = {
    11: 'a',
    12: 'f',
    13: 'l',
    14: 'q',
    15: 'v',
    21: 'b',
    22: 'g',
    23: 'm',
    24: 'r',
    25: 'w',
    31: 'c',
    32: 'h',
    33: 'n',
    34: 's',
    35: 'x',
    41: 'd',
    42: '(i/j)',
    43: 'o',
    44: 't',
    45: 'y',
    51: 'e',
    52: 'k',
    53: 'p',
    54: 'u',
    55: 'z',
  };
  const squareForDecoding = {
    a: '11',
    f: '12',
    l: '13',
    q: '14',
    v: '15',
    b: '21',
    g: '22',
    m: '23',
    r: '24',
    w: '25',
    c: '31',
    h: '32',
    n: '33',
    s: '34',
    x: '35',
    d: '41',
    i: '42',
    j: '42',
    o: '43',
    t: '44',
    y: '45',
    e: '51',
    k: '52',
    p: '53',
    u: '54',
    z: '55',
  };

  function polybius(input, encode = true) {
    // in ter result variable will store the finale result of ecoded or decoded string
    let result = '';
    // convert the input sting to lowercase to ensure the consistency
    input = input.toLowerCase();

    // ecoding
    if (encode) {
      // the loop iterates throught each character in the input
      for (let i = 0; i < input.length; i++) {
        // if the charater is a letter a && z it appends the corresponding numeric pair
        // from squareDecoding,
        if (input[i] >= 'a' && input[i] <= 'z') {
          result += squareForDecoding[input[i]];
          // if not is appends the character itself
        } else {
          result += input[i];
        }
      }
    } else {
      // decoding
      // removeing space , it splits into [] of substrings and then join to not have space
      let removedSpacesText = input.split(' ').join('');
      //  checking if the length is even
      if (removedSpacesText.length % 2 === 0) {
        // the loop iterates throught each character in the input
        for (let i = 0; i < input.length; i++) {
          // checking if the current character is not a space
          if (input[i] !== ' ') {
            // It appends the corresponding letter from squareForEncoding for the pair of characters
            result += squareForEncoding[input[i] + input[i + 1]];
            i++;
          } else {
            // it appents the space to the result
            result += input[i];
          }
        }
      } else {
        //  if the length is even
        return false;
      }
    }
    return result;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
