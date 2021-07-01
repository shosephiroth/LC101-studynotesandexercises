// DO NOT HARDCODE ANY OF THE ANSWER

// STRINGs
const phrase = "The cow jumped over the moon";

// get the last word of the phrase 
let lastWord = phrase.split(' ');
//console.log(lastWord);
console.log(lastWord[lastWord.length-1]);

// get the first word in all upper case
let firstWord = phrase.split(' ');
//console.log(firstWord);
console.log(firstWord[0]);

// get the last index of 'o'
let lastO;
// for (let i = 0; i < lastO.length - 1);
//  last0.includes('o');


// ARRAYs
// initialize prime to a empty array
let primes =[];

// add the number 1 to the array

primes.push(1);
console.log(primes);

// add the number 3 to the array

primes.push(3);
console.log(primes);

// add the number 5 to the array

primes.push(5);
console.log(primes);

// get the array length
let arrayLength;
arrayLength = primes.length 
console.log(arrayLength);

// LOOPS

// removes the letter 'm' from the phrase
// do not use 'replaceAll'
// HINT: Use a for loop to look at each character
let noM;
for (let i = 0; i < lastWord.length; i++) {
    lastWord.split('M');
    
}
console.log(noM);

// similar to acronymn, but instead of getting the first character, get the last character of each word in the phrase 'The cow jumped over the moon'
// For example if the word is 'Launch Code', the endingChars is 'he'. 'h' from Launch and 'e' from Code. 
// The expected answer for this is 'ewdren'
let endingChars;






















// YOU'RE DONE!!!!

// DO NOT MODIFY
module.exports = {
  lastWord: lastWord,
  firstWord: firstWord,
  lastO: lastO,
  noM: noM,
  endingChars: endingChars,
  primes: primes,
  arrayLength: arrayLength
}
