// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// const reverse = (str) => str.split('').reverse().join('')

// Solution 2
/* const reverse = (str) => {
    let reversed = '';
    
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
} */

// Solution 3
const reverse = (str) => str.split('').reduce((acc, act) => act + acc, '')

module.exports = reverse;
