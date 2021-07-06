let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function() {
      move = Math.floor(Math.random() * 11);
      return move;
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function() {
      move = Math.floor(Math.random() * 11);
      return move;
    }
};

let superChimpTwo = {
    name:"Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function() {
      move = Math.floor(Math.random() * 11);
      return move;
    }
};

let busyBeagle = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function() {
      move = Math.floor(Math.random() * 11);
      return move;
    }
};

let terrificTardigrade = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function() {
      move = Math.floor(Math.random() * 11);
      return move;
    }
};

console.log(superChimpOne.move());

let astronautsCrewArray = [superChimpOne, salamander, superChimpTwo, busyBeagle, terrificTardigrade];


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports([array]) {
  for (item in array) {
   console.log(`Crew report!`);
   console.log(`${array.name} is a ${array[item]}
   `);
   for (item in array) {
     console.log(`${array} are an ${array[item]}`);
     console.log(typeof(array));
     console.log(typeof(array[item]));
   }
  }
}

console.log(crewReports (astronautsCrewArray));
// Start an animal race!
