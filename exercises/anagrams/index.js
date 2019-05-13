// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Solution 1
/* const anagrams = (stringA, stringB) => {
    const aCharMap = createMap(stringA);
    const bCharMap = createMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

const createMap = (string) => {
    const word = string.replace(/[^\w]/g, '').toLowerCase();
    const charMap = {};

    for (char of word) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
} */

// Solution 2
const anagrams = (stringA, stringB) => cleanString(stringA) === cleanString(stringB)

const cleanString = (string) => string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')

module.exports = anagrams;
