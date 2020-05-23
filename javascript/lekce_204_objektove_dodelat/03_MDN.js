// Na stránce Mozilla Developer Network najděte, co dělá metoda startsWith patřící všem řetězcům. Všimněte si klíčového slova prototype v titulku stránky (budeme o něm mluvit později).

//The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false

//startswith
let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true

// Stejným způsobem najděte, co dělá metoda indexOf patřící všem polím.

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
