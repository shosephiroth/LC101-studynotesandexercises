console.log("// Chapter 5 Booleans");

console.log();

console.log("// 5.1.1 Boolean Values");

console.log(true);
console.log(typeof true);
console.log(typeof false);
console.log();

//
console.log("// 5.2.1 Loose Equality with ==");
// == Checks for Value


console.log(7 == "7");
console.log(0 == false);
console.log(0 == '');
console.log();

console.log("5.2.2. Strict Equality With ===");
// === Checks for value and type

console.log(7 === "7");
console.log(0 === false);
console.log(0 === '');
console.log()

//compound boolean expressions
console.log("// 5.3.1.1. Logical AND");

console.log(7 > 5 && 5 > 3);
console.log(8 >= 4 && 7 >= 7);
console.log(5 >=6 && 1 > 0);
console.log(2 < 3 && 'cat' == 'cat');
console.log(2 < 3 && 'dog' == 'cat');
console.log(2 > 3 && 'dog' === 'cat');
console.log();

//
console.log("// 5.3.1.2. Logical OR");
/* The "|" key is the same button as backslash "\" usually above "enter" and below backspace" */

console.log(7 > 5 || 5 > 3);
console.log(7 > 5 || 2 > 3);
console.log(2 > 3 || 'dog' === 'cat');
console.log();
//

console.log("// 5.3.1.3 Logical NOT");
// "!" reverses its boolean value

console.log(! true);
console.log(! false);

// "!"" operator has same role as "NOT" in english
console.log( !(5 > 7) );
console.log( !('dog' === 'cat') );
console.log();
//

console.log("5.3.2 Operator Precedence");
// In order from highest to lowest
console.log("!"); //Logical NOT
console.log("**"); // Exponentiation
console.log("*,/,%"); // Mutliplication and divison
console.log("+,-"); // Addition and subtraction
console.log("<=,>=,>,<"); //Comparison
console.log("===,!==,==,!="); // Equality
console.log("&&"); // Logical AND
console.log("||"); // Logical OR
console.log();


console.log("// 5.4.1. if Statements");
/* 

if (condition) {
   some code
} 

*/

let billHasBeenPaid = false;

if (!billHasBeenPaid) {
  console.log("Your bill is due soon!");
}

let num = 4

if (num % 2 === 0 && num > 3) {
  console.log(num, "is even");
  console.log(num, "is greater than 3");
}

// Make it more readable by adding first bracket at first line

if (num % 2 === 0 && num > 3) 
{ console.log(num, "is even");
  console.log(num, "is greater than 3"); }
console.log();
//

console.log("5.4.2 else Clauses");
/* if-else statements provide a mechanism for branching. The flow of the program can take one of two paths when it reaches a conditional. */

/*
if (condition) {
  // code block #1
} else {
  // code block # 2
}
*/

billHasBeenPaid = true;

if (!billHasBeenPaid) { //! = opposite meaning
  console.log("Your bill is due soon!");
} else{
  console.log("Your payments are up to daate.");
}
console.log();
//

console.log("5.4.3 else if statements");
//

let x = 10;
let y = 20;
/* had to manually space the code below, is that normal? Maybe I'm use to "prettier" extension in vscode */
if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else {
   console.log("x and y are equal");
}

/* Rules:

1. cannot use else or else if without preceding if statement

2. else and else if clauses are optional

3. Multiple else if statements may follow the if statement but must precede the else clause if one is present

4. Only one else clause may be used

*/

// let x = 10; (already did this )
// let 7 = 20; (already did this )

if (x > y) {
   console.log("x is greater than y");
} else if (x < y) {
   console.log("x is less than y");
} else if (x % 5 === 0) {
   console.log("x is divisible by 5");
} else if (x % 2 === 0) {
   console.log("x is even");
}

// 5.4.4. Check Your Understanding

// I did do this mentally first but decided to type out the example for extra practice:


let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("K=LaunchCode");
}
