// Import the lodash package
const _ = require('lodash');

// Lodash is a utility library that provides many helpful functions
// for manipulating arrays, objects, strings, and more in JavaScript.

// simple example for the usage of lodash

// create array
const numbers = [2, 6, 10, 12, 16, 20];


//chunk function is used here to split the array into chunks of specified size.
// Here, it splits 'numbers' array into chunks of 2.
console.log('Chunked array:', _.chunk(numbers, 2));


//reverse function is used here to reverse the array.
console.log('Reversed array:', _.reverse(numbers));
