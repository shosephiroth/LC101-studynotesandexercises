//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let meat = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let starch = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let fruit = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let fullPantry = [meat, starch, vegetables, beverage, fruit];

let mealChoice = "";

console.log(fullPantry.length);

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

for (let i = 0; i < fullPantry.length-1; i++) {
  for (let j = 0; j < meat.length; j++);
    console.log(meat[i]);
    console.log(starch[i]);
    console.log(vegetables[i]);
    console.log(beverage[i]);
    console.log(fruit[i]);
    console.log(fullPantry[i]);
}


//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”
