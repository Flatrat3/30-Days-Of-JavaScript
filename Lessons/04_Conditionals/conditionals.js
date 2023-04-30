//!Conditionals

/* 
if
if else
if else if else
switch
ternary operator*/

//!If

/*
if (condition) {
  this part of code runs for truthy condition;
}*/

let number = 6;
if (number >= 4) {
  console.log(`${number} is greater than 4`);
}

let isRaining = true;
if (isRaining) {
  console.log(`You need to take an umbrella`);
}

//!If Else

/* Syntax 
if (number < 16){
    console.log(`You are too young to drive`);
} else {
    console.log(`You are allowed to get drive license)
}
*/

let driveAge = 18;
if (driveAge >= 18) {
  console.log(`You are allowed to get drive license`);
} else {
  console.log(`You are too young to get drive license`);
}

//!If Else if Else
/*
if (condition){
    code
} else if {
    code
} else{

}
*/

/* 
let age = parseInt(prompt("Enter your age"));

if (age < 18) {
  console.log(`You are too young`);
} else if (age >= 18 && age <= 25) {
  console.log(`You are young`);
} else if (age >= 26 && age <= 60) {
  console.log(`You are middle aced adult`);
} else {
  console.log(`You are old`);
}*/

//!Switch

// let num1 = prompt("Enter a number");

// switch (true) {
//   case num1 > 0:
//     console.log(`${num1} is positive number`);
//     break;
//   case num1 < 0:
//     console.log(`${num1} is negative number`);
//     break;
//   case num1 == 0:
//     console.log(`${num1} is zero`);
//     break;
//   default:
//     console.log(`${num1} is not a number`);
// }

// let input = prompt("Enter a character:");

switch (true) {
  case !isNaN(input):
    console.log(`The input is a number`);
    break;
  case input.toLowerCase() != input.toUpperCase():
    console.log(`The input is a character`);
    break;
  default:
    console.log("The input is neither a letter nor a number.");
    break;
}

//!Ternary

let number3 = 10;
number3 > 20
  ? console.log(`${number3} is greater than 20`)
  : console.log(`${number3} is smaller than 20`);
