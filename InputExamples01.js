/* Try It
Update your code to request a user's first and last name, then print an output that looks like:

First name: Elite
Last name: Coder
Last, First: Coder, Elite
*/ 

const input = require(`readline-sync`);

let firstName = input.question("Enter your first name: ");
let lastName = input.question("Enter your last name: ");


console.log("First name: " + firstName);
console.log("Last name: " + lastName);
console.log("Last, First: " + firstName);
