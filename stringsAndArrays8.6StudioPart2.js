let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

console.log(strings.includes(','));
console.log(protoArray1.includes(','));
console.log(protoArray2.includes(','));
console.log(protoArray3.includes(','));
console.log(protoArray4.includes(','));

console.log();

console.log(strings.includes(';'));
console.log(protoArray1.includes(';'));
console.log(protoArray2.includes(';'));
console.log(protoArray3.includes(';'));
console.log(protoArray4.includes(';'));

console.log();

console.log(strings.includes(' '));
console.log(protoArray1.includes(' '));
console.log(protoArray2.includes(' '));
console.log(protoArray3.includes(' '));
console.log(protoArray4.includes(' '));

console.log();

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if (strings[0].includes(',')) {
   console.log(strings[0]);
   strings0 = strings[0].split(",").reverse().join(',');
   console.log(strings0);
     
} else {
  console.log('It\'s false');
}

//
console.log();
//

if (strings[1].includes(',')) {
   console.log(strings[1]);
   strings0 = strings[1].split(",").reverse().join(',');
   console.log(strings1);
     
} else {
  console.log('It\'s false');
}

//
console.log();
//

if (strings[2].includes(',')) {
   console.log(strings[2]);
   strings0 = strings[2].split(",").reverse().join(',');
   console.log(strings2);
     
} else {
  console.log('It\'s false');
}

//
console.log();
//

if (strings[3].includes(',')) {
   console.log(strings[3]);
   strings3 = strings[3].split(",").reverse().join(',');
   console.log(strings3);
     
} else {
  console.log('It\'s false');
}

//
console.log();
//




//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

if (strings[0].includes(';')) {
   console.log(strings[0]);
   strings0 = strings[0].split(";").sort().join(",");
   console.log(strings0);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[1].includes(';')) {
   console.log(strings[1]);
   strings1 = strings[1].split(";").sort().join(",");
   console.log(strings1);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[2].includes(';')) {
   console.log(strings[2]);
   strings2 = strings[2].split(";").sort().join(",");
   console.log(strings2);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[3].includes(';')) {
   console.log(strings[3]);
   strings3 = strings[3].split(";").sort().join(",");
   console.log(strings3);
} else {
   console.log('Not found.');
}

//
console.log();
//


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

if (strings[0].includes(' ')) {
   console.log(strings[0]);
   strings0 = strings[0].split(" ").sort().reverse().join(' ');
   console.log(strings0);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[1].includes(' ')) {
   console.log(strings[1]);
   strings1 = strings[1].split(" ").sort().reverse().join(' ');
   console.log(strings1);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[2].includes(' ')) {
   console.log(strings[2]);
   strings2 = strings[2].split(" ").sort().reverse().join(' ');
   console.log(strings2);
} else {
   console.log('Not found.');
}

//
console.log();
//

if (strings[3].includes(' ')) {
   console.log(strings[3]);
   strings3 = strings[3].split(" ").sort().reverse().join(' ');
   console.log(strings3);
} else {
   console.log('Not found.');
}

//
console.log();
//

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.


if (strings[3].includes(' ')) {
   console.log(strings[3]);
   strings3 = strings[3].split(",").sort().reverse().join('');
   console.log(strings3);
} else {
   console.log('Not found.');
}

//
console.log();
//
