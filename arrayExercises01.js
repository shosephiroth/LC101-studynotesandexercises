//Create an array that can hold 4 items name practiceFile.

let practiceFile = [273.15]
practiceFile.push(42, 'hello');
console.log(practiceFile);


//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
//------------------------------------------------
/* the instructions differ from what "8.5 Exercises" in chapter 8 says:

Create an array called practiceFile with the following entry: 273.15. Use the push method to add the following elements to the array. Add items a & b one at a time, then use a single push to add the items in part c. Print the array after each step to confirm the changes.
------------------------------------------------//
*/

practiceFile[3] = 42;
console.log(practiceFile);

practiceFile[4] = 'hello';
console.log(practiceFile);


//Use a SetValue to add the items "false", and "-4.6", and “87” to the array.  Print the array to confirm the changes.

practiceFile.set.add(false, -4.6, 87);
console.log()

// The only thing I found on setValue that made sense was this: https://www.javatpoint.com/javascript-set-values-method

