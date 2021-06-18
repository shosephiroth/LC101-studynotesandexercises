const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let startOfString = str.slice(0,3);
let endOfString = str.slice(3);
console.log(startOfString);
console.log(endOfString);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(str);
console.log(`${startOfString}${endOfString}`);
console.log(`${endOfString}${startOfString}`);

console.log(`This is the original string: ${str}; and this is the modified string: ${endOfString}${startOfString}`)


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
 let userStr = input.question("How many letters would you like relocated? ");

startOfString = str.slice(0,userStr);
endOfString = str.slice(userStr);
console.log(startOfString);
console.log(endOfString);

console.log(`This is the original string: ${str}; and this is the modified string: ${endOfString}${startOfString}`);

console.log();


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

strLength = (str.length - 1);
if (userStr >= str.length - 1){
   console.log(`Choose a number smaller than ${strLength}`);
} else if (userStr != Number(userStr)) {
   console.log("That's not a number");
}
  else {
   console.log(`This is the original string: ${str}; and this is the modified string: ${endOfString}${startOfString}`)
}
