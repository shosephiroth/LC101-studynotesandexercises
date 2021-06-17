// 7.2 Bracket notation

// Bracket notation is a special syntax that allows access to the individual characters that make up a string

// The indices of a string

// Javascript
// 0123456789

// J a v a s c r i p t 
// 0 1 2 3 4 5 6 7 8 9

//This program prints out the initials of the person's name 

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

// What is printed by the following code?

let phrase = "Javascript rocks!";
console.log(phrase[phrase.length - 8]);

// Answer is "t"

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

// 7.3.2 Strings are Objects 

let firstName = "Grace";
let lastName = "Hopper";

console.log(firstName, "has", firstName.length, "characters");
console.log(lastName, "has", lastName.length, "characters");

// every string has a length property, which is an integer

// The toLowerCase() string method returns the value of its string in all lowercase letters

let nonprofit = "LaunchCode";
console.log(nonprofit.toLowerCase());
console.log(nonprofit);

// 7.3.3 Check your understanding

// Given word = 'Rutabaga', why does word.length return interger 8, but word[8] is undefined?

// Answer, indices count from 0 but 

// 7.4 String Immunity 

nonprofit = "Launchcode"; // already did this 

console.log(nonprofit);
nonprofit[6] = "C";
console.log(nonprofit); // nothing has changed

// We tried to swap out 'c' for 'C' but strings are immutable

// immutability applies to string values and not string variables 

// we can set a variable containing a string to a different value 

nonprofit = "Launchcode";
nonprofit = "LaunchCode";

console.log(nonprofit);

// Here we are modifying the value that the variable is storing, not the string itself 

// 7.4.1 Check Your Understanding 

// Given pet = 'cat'
// why do statements console.log(pet + 's'); and pet += 's'; NOT violate the immutability of strings? 

// 7.5 Sting Methods 

/* JS provides many useful methods for string objects. Recall a method is a function that "belongs to" a specific object. For strings, this means that our methods will typically transform the characteres of the given string in some way */

// let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

// nonprofit.toLowerCase() evaluated to "Launchcode", but the value of nonprofit was left unchanged.

// This will be the case for each of the string methods 

// 7.5.1 Common String Methods 

// indexOf 
// stringName.indexOf(substr)
/* Returns the index of the first occurrence of the substring in the string, and returns -1 if the substring is not found. */

// toLowerCase
// stringName.toLowerCase()
/* 	Returns a copy of the given string, with all uppercase letters converted to lowercase. */

// toUpperCase
// stringName.toUpperCase()
/* 	Returns a copy of the given string, with all lowercase letters converted to uppercase. */

// trim
// stringName.trim()
/* Returns a copy of the given string with the leading and trailing whitespace removed. */

// replace 
// stringName.replace(searchChar, replacementChar)
/* Returns a copy of stringName, with the first occurrence of searchChar replaced by replacementChar. */

// slice
// stringName.slice(i, j)
/* Returns the substring consisting of characters from index i through index j-1. */

// 7.5.2 Check your Understanding 

// What is printed by the following code?

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);

// Given language = "Javascript"; what does language.slice(1,6) return?

language.slice(1,6);

// What is the value of the string printed by the following program?

let org = " The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

// 7.6 Encoding Characters 

// Data stored on a computer's hard drive or in its memory, is all 0s and 1s.

// Each 0 and 1 is known as a bit

// A bit us a unit of measurement like meter or pound.

// Collections of computer data are measured in bits

// 7.6.1 Representing Numbers 

// A Byte is a set of 8 bits.
// Bytes look like 00101101 11110011
// And they represent a binary number or a base-2 number.

/*  A binary number is a number representation that uses only 0s and 1s. The numbers that you are used to, which are built out of the integers 0...9, are decimal numbers, or base-10 numbers.

Since each bit can have one of two values, each byte can have one of 28 = 256 different values.

It may not be obvious, but every decimal integer can be represented as a binary integer, and vice versa. There are 256 different values a byte may take, each of which can be used to represent a decimal integer, from 0 to 255. */ 

// 7.6.2 Representing Strings 

// Strings are collections of characters, so if we can represent each character as a number
// then we'll have a way to go from a string to a collection of bits, and back again.

// 7.6.2.1 Character Encodings 

/* Unlike the natural translation between binary and decimal numbers, there is no natural translation between integers and characters. For example, you might create a pairing of 0 to a, 1 to b, and so on. But what integer should be paired with $ or a tab? Since there is no natural way to translate between characters and integers, computer scientists have had to make such translations up. Such translations are called character encodings.

There are many different encodings, some of which continue to evolve as our use of data evolves. For instance, the most recent versions of the Unicode character encoding include emoji characters, such as [taco emoji] */

// 7.6.3 Character Encodings in Javascript

// JS provides methods to convert any character into its ASCII and back.
// The string method charCodeAt takes an index and returns the ASCII code of the character index.

nonprofit = "LaunchCode";

console.log(nonprofit.charCodeAt(0)); // 76
console.log(nonprofit.charCodeAt(1)); // 97
console.log(nonprofit.charCodeAt(2)); // 117
console.log(nonprofit.charCodeAt(3)); // 110
console.log(nonprofit.charCodeAt(4)); // 99
console.log(nonprofit.charCodeAt(5)); // 104
console.log(nonprofit.charCodeAt(6)); // 67
console.log(nonprofit.charCodeAt(7)); // 111
console.log(nonprofit.charCodeAt(8)); // 100
console.log(nonprofit.charCodeAt(9)); // 101

// To convert an ASCII code to an actual character, use String.fromCharCode().

let codes = [76, 97, 117, 110, 99, 104, 67, 111, 100, 101];

let characters = String.fromCharCode(codes[0]) + String.fromCharCode(codes[1])
               + String.fromCharCode(codes[2]) + String.fromCharCode(codes[3])
               + String.fromCharCode(codes[4]) + String.fromCharCode(codes[5])
               + String.fromCharCode(codes[6]) + String.fromCharCode(codes[7])
               + String.fromCharCode(codes[8]) + String.fromCharCode(codes[9]);

console.log(characters); // LaunchCode

// 7.7 Special Characters

/* Aside from letters, numbers, and symbols, there is another class of characters that we will occasionally use in strings, known as special characters. These characters consist of special character combinations that all begin with a \ (backslash). They allow us to include characters in strings that would be difficult or impossible to include otherwise, such as Unicode characters that are not on our keyboards, control characters, and whitespace characters.

The most commonly-used special characters are \n and \t, which are the newline and tab characters, respectively. They work as you would expect. */

console.log("A message\nbroken across lines,\n\tand indented");

/* We can also represent Unicode characters (most of which aren't on a normal keyboard) using special character combinations of the form \uXXXX, where the Xs are combinations referenced by the Unicode table. This allows us to use character sets other than the basic Latin characters that English is based on, such as Greek, Cyrillic, and Arabic, as well as a wider array of symbols. */

console.log("The interrobang character, \u203d, combines ? and !");

// We can also use the backslash \, to include quotes in a string. This is known as escaping a character.

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");

// 7.7.1 Check your Understanding 

/* Question
Which of the options below prints 'Launch' and 'Code' on separate lines?

a. console.log('Launch\nCode');
b. console.log('Launch/nCode');
c. console.log('Launch', 'Code');
d. console.log('Launch\tCode');
e. console.log('Launch/tCode'); */

// Answer is a. console.log('Launch\nCode');

// 7.8 Template Literals

let name = "Jack";
let currentAge = 9;

console.log("Next year, " + name + " will be " + (currentAge + 1) + ".");

/* Unfortunately, this process quickly gets tedious for any output that depends on multiple variables. Often, concatenation requires multiple test runs of the code in order to check for syntax errors and proper spacing within the output. Fortunately, JavaScript offers us a better way to accomplish this process.

Template literals allow for the automatic insertion of expressions (including variables) into strings.

While normal strings are enclosed in single or double quotes (' or "), template literals are enclosed in back-tick characters, `. Within a template literal, any expression surrounded by ${ } will be evaluated, with the resulting value included in the string. */

// Template literals allow for variables and other expressions to be directly included in strings.

console.log(`Next year, ${name} will be ${currentAge + 1}.`);

/* Besides allowing us to include data in strings in a cleaner, more readable way, template literals also allow us to easily create multi-line strings without using string concatenation or special characters. */

let poem = `The mind chases happiness.
The heart creates happiness.
The soul is happiness
And it spreads happiness
All-where.

– Sri Chinmoy`;

console.log(poem);
console.log();

// 7.8.1 Check Your Understanding 

let pluralNoun = "Geese";
name = "Matt";
let verb = "joking";
let adjective = "haphazardly";
let color = "green";

console.log("JavaScript provides a "+ color +" collection of tools — including " + adjective + " syntax and " + pluralNoun + " — that allows "+ name +" to "+ verb +" with strings.");

console.log(`JavaScript provides a ${color} collection of tools - including ${adjective} syntax and ${pluralNoun} + - that allows ${name} to ${verb} with strings`);
