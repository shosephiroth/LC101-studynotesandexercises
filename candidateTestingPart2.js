const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// put questions in variables then put variables in array
let q1 = input.question("Who was the first American woman in space?");
let q2 = input.question("True or false: 5 kilometer == 5000 meters?");
let q3 = input.question("(5 + 3)/2 * 10 = ?");
let q4 = input.question("Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?");
let q5 = input.question("What is the minimum crew size for the ISS?");
// Same for answers 
let a1 = "Sally Ride";
let a2 = "true";
let a3 = "40";
let a4 = "Trajectory";
let a5 = "3";
// Same for candidate answers
let cA1;
let cA2;
let cA3;
let cA4;
let cA5;
//
let question = "Who was the first woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = [];
let questions = [q1, q2, q3, q4, q5];
let correctAnswers = [a1, a2, a3, a4, a5];
let candidateAnswers = [cA1, cA2, cA3, cA4, cA5];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < correctAnswers.length; i++) {
       console.log()
  }
//candidateAnswer = input.question(question);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log(`For question 1, you answered. The correct answer is ${correctAnswers[i]}`);

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
