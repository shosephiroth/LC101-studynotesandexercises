const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = [q1, q2, q3, q4, q5];
let correctAnswers =[];
let candidateAnswers;
// put questions in variables then put variables in array
let q1 = "Who was the first American woman in space?";
let q2 = "True or false: 5 kilometer == 5000 meters?";
let q3 = "(5 + 3)/2 * 10 = ?";
let q4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?";
let q5 = "What is the minimum crew size for the ISS?";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer = input.question(question);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
   console.log("You are correct! *DJ Horn plays*");
} else {
   console.log("You are incorrect. Womp womp!");    
}

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
