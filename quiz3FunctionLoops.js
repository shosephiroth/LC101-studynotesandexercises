// Question #1
// create a function named fullName that takes in two params, firstName and lastName.
// return a string with the name combined
// Example:
// firstName = "Grace"
// lastName = "Hopper"
// The function should return "Grace Hopper"

function fullName (firstName, lastName) {
  firstAndLastName = firstName + ' ' + lastName;
  console.log(firstAndLastName);
}
//test
fullName('Matt', 'Harris');


// Question #2
// Similar to acronym, this functions will return the last character of each word in upper case
// For example, if the title is "Launch Code", the result should be "HE"

title = 'Launch Code';

function backcronym(title) {
  title = title + ' ';
  let title2 =[];
  for (let i=1; i < title.length; i++) {
     if (title[i] === ' ') {
        title2.push((title[i - 1] + ' '));
        console.log(title2);
     }
  }


}

backcronym(title);

// Question #3
// Given an array of numbers, find the smallest number in the array
// you can use a library function or write your own
function minValue(numbers) {
  let smallestNum = numbers.sort((a, b) => a - b);
  console.log(smallestNum[0]);

}

array1 = [4, 1, 6, 2, 1, 2, 5, 2];

minValue(array1);



// Bonus Question
// Given an array of numbers, find the number that appears the most
// For example, given [4, 1, 6, 2, 1, 2, 5, 2]
// the function should return 2, because 2 appears 3 times, more than the other numbers
function mostCommon(numbers) {

}
