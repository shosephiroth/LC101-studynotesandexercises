// So I'm not sure how this solution is coming about

2 ** 2 ** 3 * 3

// answer is 768, but how?

/* "Due to an historical quirk, an exception to the left-to-right rule is the exponentiation operator **. A useful hint is to always use parentheses to force exactly the order you
want when exponentiation is involved" */

// So the forumla should follow:

let num1 = 2 ** 3 //as soon as I started writing this I figured out where I was doing it wrong in my head. Womp womp

num1 = 2 ** num1 // not num1 ** 2
num1 = num1 * 3
console.log(num1);

/* I was going from right to left starting with the numbers, not the operators themselves. I was doing 3 **2 instead of 2 ** 3. The operator is the starting point but read the
numbers from right to left. */
