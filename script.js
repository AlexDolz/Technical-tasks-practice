// Find All Unique Characters in a String
// Write a function that takes a string and returns a new string containing only the characters that appear once.

// Example:
// uniqueChars("aabbcde") → "cde"

function uniqueChars(str) {
  let uniq = '';
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      uniq += char;
    }
  }
  return uniq;
}

console.log(uniqueChars('aabbcde'));
console.log('***************************************');

// **********************************************************************

// Sum of Even Numbers
// Given an array of numbers, return the sum of all even numbers.

function sumEven(arr) {
  return arr.filter(elem => elem % 2 === 0).reduce((acc, sum) => acc + sum, 0);
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
console.log('****************************************');

// **********************************************************************

// Check for Duplicates
// Write a function that checks if an array contains any duplicate values.

function hasDuplicates(arr) {
  // arr.sort();

  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] === arr[i + 1]) {
  //     return true;
  //   }
  // }

  // return false;

  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicates([1, 2, 3, 4, 5, 1]));
console.log('**********************************************');

// ********************************************************************

// Count Capital Letters
// Write a function that counts how many uppercase letters are in a string.

function countCapitals(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count++;
    }
  }

  return count;
}

console.log(countCapitals('Hello WORLD'));
console.log('*********************************');

// *********************************************************************
