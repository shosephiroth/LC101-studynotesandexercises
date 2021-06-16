// The indices of a string

// An expression of the form someString[i] gives the character at index i.

let jsCreator = "Matt Harris"
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[5];

let outputStr = "Javascript was not created by someone with the initials " + firstInitial + "." + lastInitial + ".";

console.log(outputStr);

// What does an expression using bracket notation evaluate to when the index is invalid?

// (the index does not correspond to a character in the string)?

// Answer: Undefined

// 7.2.1 Check your understanding

// if phrase = 'Code for fun', then phrase[2] evaluates to:

// Answer: d 


// Which of the following returns true given myStr = 'Index'?

//Answer:
// myStr[4] = 'x';
// myStr[0] = 'I';

// 7.3 Strings as Objects

// In JS strings are objects. To understand how we can use them we must learn about objects

// An object is a collection of related data and operations. 

// An operation that can be carried out on an object is known as a method. A piece of data associated with an object is known as a property.

// Suppose we had a square object in JS. Since a square has 4 sides of the same length, it should
// have a property to represent this length. 
//This property could be called length

// Since a square has an area, it should have a method to calculate the area
// This method could be called area and it should caulcuate the area using its lngth property

// You can think of methods and properties as functions and variables that belong to an object

// Returning to the square example, we can access its length by typing square.length

// Referencing length or area by itself in code does not give you the value of square.length

// It also does not carry othe calculation square.area()

// // It does not make sense to refer to a poperty or method without also referring to the
// associated object. 

// typing simply length or area() is ambiguous. In relation to what object?

console.log(typeof console); // the console is an object in JS

// When calling console.log we are calling the lof method of the console object

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

// every string has a length property, which is an integer

// The toLowerCase() string method returns the value of its string in all lowercase letters

let nonprofit = "LaunchCode";
console.log(nonprofit.toLowerCase());
console.log(nonprofit);
