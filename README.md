# Decoder_Ring
I did a project at Thinkful's Software Engineering Bootcamp. While working on it, I practiced writing complex algorithms and doing tests with Mocha and Chai. 

The demonstrations below show users how to encode and decode messages using Caesar Shift, the Polybius function, and the Subsitution function. All of them pass the unit test with Mocha and Chai.

The Caesar function performs the Caesar shift cipher on a given input string. Non-alphabetic characters remain unchanged. The function also checks if the shift value is within a valid range and provides an option to encode or decode based on the 'encode' parameter. The resulting string is returned as the output

* For encoding, it shifts each alphabetic character by a positive specified amount negative for decoding while maintaining the case.
* For decoding, it shifts each alphabetic character by a negative specified amount negative for decoding while maintaining the case.


https://github.com/LiliaRibac/Decoder_Ring/assets/43895766/db02aa3f-1f38-4c8f-a029-64e8a515d537


https://github.com/LiliaRibac/Decoder_Ring/assets/43895766/60df0f1e-8e64-44c1-a704-1fb4d5540704

The polybius function performs encoding or decoding using the Polybius square, a cipher where each letter is represented by a unique pair of numerical coordinates. The function returns the final encoded or decoded string.


* For encoding, it converts each letter in the input string to its corresponding numeric pair from a predefined square (squareForDecoding). Non-alphabetic characters remain unchanged.
* For decoding, it removes spaces from the input and ensures the length is even. It iterates through pairs of characters, translateing them to letters based on the predefined square (squareForEncoding). Spaces are retained in the result. Note if the input length is odd, it returns false.

https://github.com/LiliaRibac/Decoder_Ring/assets/43895766/492d24d4-0a8b-43e7-a91c-d0a1d6065143


The substitution function performs substitution encode and decode using a provided substitution alphabet. It checks if the substitution alphabet has exactly 26 unique characters and is not undefined. Non-alphabetic characters remain unchanged.

* For encoding, it replaces each letter in the input with its corresponding letter in the substitution alphabet.
* For decoding, it does the reverse, replacing each letter in the substitution alphabet with its corresponding letter in the standard alphabet.

The function returns the final result.
