// I get this wrong when I break the expression down?

// num1 = 16 - 2 * 5 / 3 + 1

let num1 = 2 * 5
console.log(num1)
num1 = num1 / 3
console.log(num1)
num1 = num1 + 1
console.log(num1)
num1 = 16 - num1
console.log(num1)

//the original expression:

num1 = 16 - 2 * 5 / 3 + 1
console.log(num1)

/* The reason I was getting the wrong answer is because "+" and "-" are the same precedence so when that happens we must evaluate the expression from left to right at that point. Even though addition precedes subtraction in the order of operations, they are the same precedence. */

//broken down example:

let num1 = 2 * 5;
console.log(num1);
num1 = num1 / 3;
console.log(num1);
num1 = 16 - num1;
console.log(num1);
num1 = num1 + 1;
console.log(num1);

