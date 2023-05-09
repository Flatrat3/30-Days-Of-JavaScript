// **Exercise 1
//!1.1

// let inputAge = parseInt(prompt("Enter your age"));
// if (inputAge >= 18) {
//   console.log("You are old enough to drive");
// } else {
//   console.log(`wait for the ${18 - inputAge} years old`);
// }

//!1.2

// let yourAge = parseInt(prompt("Enter your age"));
// const myAge = 28;

//! if (yourAge > myAge) {
//   console.log(`You are ${yourAge - myAge} years older than me.`);
// } else {
//   console.log(`I am ${myAge - yourAge} years older than you`);
// }

//!1.3

let a = 4;
let b = 3;

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

//! 1.4

// let num = parseInt(prompt("Enter a number"));

// if (num % 2 === 0) {
//   console.log(`${num} is even number`);
// } else {
//   console.log(`${num} is odd number`);
// }

//** Exercise 2

//!2.1
// let score = parseInt(prompt("Enter your score"));

// if (score >= 90) {
//   console.log(`Your score is A`);
// } else if (score >= 80 && score < 90) {
//   console.log(`Your score is B`);
// } else if (score >= 70 && score < 80) {
//   console.log(`Your score is C`);
// } else if (score >= 60 && score < 70) {
//   console.log(`Your score is D`);
// } else if (score >= 50 && score < 60) {
//   console.log(`Your score is E`);
// } else console.log(`You are failed`);

//!2.2

// let seasonName = prompt("Enter season name");

// switch (seasonName) {
//   case "September":
//   case "October":
//   case "November":
//     console.log(`Iti is autumn season`);
//     break;
//   case "December":
//   case "January":
//   case "February":
//     console.log(`Iy is winter season`);
//     break;
//   case "March":
//   case "April":
//   case "May":
//     console.log(`It is spring season`);
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("It is summer season");
//     break;
//   default:
//     console.log(`You wouldn't write season properly`);
// }

// if (
//   seasonName === "September" ||
//   seasonName === "October" ||
//   seasonName === "November"
// ) {
//   console.log("It is autumn season");
// } else if (
//   seasonName === "December" ||
//   seasonName === "January " ||
//   seasonName === "February"
// ) {
//   console.log("It is winter season");
// } else if (
//   seasonName === "March" ||
//   seasonName === "April" ||
//   seasonName === "May"
// ) {
//   console.log("It is Spring season");
// } else if (
//   seasonName === "June" ||
//   seasonName === "July" ||
//   seasonName === "August"
// ) {
//   console.log("It is Summer season");
// } else console.log(`You wouldn't write season properly`);

//!2.3
// // Get current date
// // const today = new Date();

// // Prompt user for day burada to lowerCase() ona gore istifade edirik ki, istenilen durumda dogru cikti alaq
// const day = prompt("What is the day today?").toLowerCase();

// // Determine if day is weekend or working day

// if (day === "saturday" || day === "sunday") {
//   console.log(`${day.charAt(0).toUpperCase()} ${day.slice(1)} is a weekend`);
// } else {
//   console.log(
//     `${day.charAt(0).toUpperCase()} ${day.slice(1)} is a working day`
//   );
// }

//**Exercise 3 */

// Gets year and month information from the user

const year = parseInt(prompt("Enter year"));
const month = parseInt(prompt("Enter month (1-12)"));

//Find the last day of the specified month

const lastDay = new Date(year, month, 0).getDate();

console.log(`Number of days in month ${month} of year ${year}: ${lastDay}`);
