// Write a function makeLine(size) that returns a line with exactly size hashes.

// attempt 1
const input = require('readline-sync');

function makeLine(size) {
 let i = input.question('Pick a number, 1-10');
 i = (i * size);
 return i;
}

makeLine(3); 

// attempt 2

function makeLine2(size) {
   let i = '#';
   return (size * i);
}

makeLine2(5);
