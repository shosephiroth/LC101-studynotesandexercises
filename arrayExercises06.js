//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.000];
element2 = ['helium', 'He', 4.003];
element3 = ['iron', 'Fe', 55.85];



//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
table = [];
table.push(element1, element2, element3);
console.log(table);

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).



//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.



//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
