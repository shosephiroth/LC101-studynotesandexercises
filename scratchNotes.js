function plusTwo(num) {
   return num + 2;
}

let a = 2;
for (let i=0; i < 4; i++) {
   a = plusTwo(a);
   console.log(a);
   console.log();
}

console.log(a);

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

let sandwhich;

function makeSandwich(breadType, fillingType, condiments) {
   console.log();
   console.log();
   console.log();
// Make a sandwhich with the given ingridients

}

console.log(makeSandwich('rye', 'veggies', 'buffalo sauce'));

makeSandwich();

function sayHello() {
   console.log("Hello, World!");
}

sayHello();

console.log();

/*
function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
     reversed = str[i] + reversed;
  }

  return reversed;
}

*/

function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

let str = 'money';

reverse(str);
