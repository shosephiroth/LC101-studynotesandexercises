// Chapter 9 Repeating with Loops


// Instead of:
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log();
// and so on...


// this works:

for (let i = 0; i < 51; i++) {
   console.log(i);
}

/*
Let's break down this syntax piece by piece, so we can begin to understand how for loops are structured.

A for loop always contains the following components:

for (initial expression; loop condition; update expression) {
   loop body
}
*/

/* 
Notice that in the first line, within parentheses, the components initial expression, loop condition, and update expression are separated by semicolons. Let's look at these components in detail.

1. The statement let i = 0 is executed exactly once, at the beginning of loop execution. The variable i is the loop variable.
2. The boolean expression i < 51 is the loop condition. This condition is evaluated before each loop iteration, or repetition.
   a. If the condition is true then the loop executes again.
   b. If the condition is false then the loop ceases execution, and the program moves on to the code below the loop.
3. The statement i++ is the update expression. This expression is executed at the end of each loop iteration.
4.The block of code surrounded with brackets ({ }) is the loop body. The body is executed once for each iteration of the loop.
*/


// 9.2.2. Flow of Execution of the for Loop

/* In just a few lines of code, a for loop contains a lot of detailed logic, so let's spend some time breaking down the flow of execution for the particular loop that we've been looking at. */

/* 
1.When the program reaches the for loop, the initial expression let i = 0 is executed, declaring the variable i and initializing it to the value 0.
2. The loop condition i < 51 is evaluated, returning true because 0 is less than 51.
3. Since the condition is true, the loop body executes, printing 0.
4. After the execution of the loop body, the update expression i++ is executed, setting i to 1. This completes the first iteration of the loop.
5. Steps 2 through 4 are repeated, using the new value of i. This continues until the loop condition evaluates to false in step 2, ending the loop. In this example, this occurs when i < 51 is false for the first time. Since our update expression adds 1 after each iteration, this occurs when i is 51 (so 51 < 51 is false). At that point, the loop body will have executed exactly 51 times, with i having the values 0...50. 
*/

/* 9.3. Iterating Over Collections
One of the most common uses of a for loop is to carry out a task once for each item in a collection. We have learned about two types of collections, strings and arrays. When using a loop with a collection in this way, we say that the loop iterates over the collection.

9.3.1. Iterating Over Strings
The following example prints each of the characters of the string "LaunchCode" on a separate line. */

// Example

let name = "LaunchCode";

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}

/* 
9.3.2. Iterating Over Arrays
The following example prints each of the programming languages in the array languages on a separate line.
*/

let languages = ["JS", "Java", "C#", "Python"];

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

