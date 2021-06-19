// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

/* My feedback from Max:

Looks good, Matt. I like how you avoided the final logic error by combining the conditions into a single check. I noticed you left out the code from B & D 
(the "feeding parrot" etc). There's an extra paren on line 14 in B. There's a call to "consoul.log" in D. Nice job! */

let launchReady = false;
let fuelLevel = 20000;
let crewStatus = true;
let computerStatus = 'green';
let launchStatus = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchStatus = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

console.log("launchReady = ", launchReady);

if (launchReady == true && fuelLevel >= 20000 && crewStatus == true && computerStatus == 'green') {
  console.log("Countdown to liftoff: 3, 2, 1, liftoff!");
} else {
  console.log("Launch scrubbed!");
}
