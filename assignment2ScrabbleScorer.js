// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// A) Initial Prompt

// 1. Modify the provided initialPrompt() function to prompt the user to enter a word to score.

// 2. Use the oldScrabbleScorer() function provided to score the word provided by the user. Print the result to the console.

function initialPrompt() {
   console.log("Let's play some scrabble!");
   candidateWord = input.question('Enter a word: ');
   console.log(oldScrabbleScorer(candidateWord));

};

// B) Add and Organize Scoring Algorithms

// 1. simpleScore: Define a function that takes a word as a parameter and returns a numerical score. Each letter within the word is worth 1 point.

let simpleScore = function (word) {
   for (let i = 0; i < word.length; i++) {
     //test
     //console.log(i);
     return i;
   }
};

//test
//simpleScore('money');

// 2. vowelBonusScore: Define a function that takes a word as a parameter and returns a score. Each vowel within the word is worth 3 points, and each consonant is worth 1 point.

let vowelBonusScore = function (word) {
 for (let i = 0; i < word.length; i++) {
    if (word.includes('a', 'e', 'i', 'o', 'u')) {
      //test
      console.log(word[i]);
      //return i;
    } else {
      //test
      console.log('no worky');
    }
 }
}; 

vowelBonusScore('money');

let scrabbleScore;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

