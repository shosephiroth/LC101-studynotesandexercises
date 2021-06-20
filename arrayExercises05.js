let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str);
console.log(str.split())

console.log();

console.log(str);
console.log(str.split('e'));

console.log();

console.log(str);
console.log(str.split(' '));

console.log();

console.log(str);
console.log(str.split(''));

console.log();

//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr);
console.log(arr.join());

console.log();

console.log(arr);
console.log(arr.join('a'));

console.log();

console.log(arr);
console.log(arr.join(' '));

console.log();

console.log(arr);
console.log(arr.join(''));

console.log();

//c) Do split or join change the original string/array?

// Answer: No 


//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

cargoHold2 = cargoHold.split(',')
console.log(cargoHold);

console.log();
console.log(cargoHold2);

console.log();

cargoHold3 = cargoHold2.sort();
console.log(cargoHold3);

console.log();

cargoHold = cargoHold3.join(',');
console.log(cargoHold);
