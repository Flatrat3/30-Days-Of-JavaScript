//Day 3: Exercises
//Exercises: Level 1

let firstName = "John";
let lastName = "Doe";
let country = "United States";
let city = "New York";
let age = 30;
let isMarried = false;
let year = 2023;

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

//True value

let age1 = 30;
if (age1) {
  console.log("Truthy value");
}

let name = "John";
if (name.length > 0) {
  console.log("Truthy value");
}

let num = 5;
if (num === 5) {
  console.log("Truthy value");
}

// False value

let num1 = 0;
if (!num1) {
  console.log("Falsy value");
}

let emptyString = "";
if (!emptyString.length) {
  console.log("Falsy value");
}

let noValue;
if (!noValue) {
  console.log("Falsy value");
}

//Exercises: Level 2

//Area of triangle
// let triangleBase = parseInt(prompt("Enter base"));
// let triangleHeight = parseInt(prompt("Enter height"));
// let areaOfTriangle = 0.5 * triangleBase * triangleHeight;
// console.log(`Area of triangle is equal to ${areaOfTriangle}`);

/*let x = parseInt(prompt("Enter a number"));
let y = 2 * x - 2;
console.log(`The variables y is equal to ${y}`);*/

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/*
let hours = parseInt(prompt("Enter hours"));
let perHour = parseInt(prompt("Enter rate per hour"));
let weeklyEarnings = hours * perHour;

console.log(`Your weekly earnings is ${weeklyEarnings}`);*/

// let nameLength = prompt("Enter your name");

// if (nameLength.length > 7) {
//   console.log(`Your ${nameLength} is long`);
// } else {
//   console.log(`Your ${nameLength} is short`);
// }

let firstName1 = "Asabeneh";
let lastName1 = "Yetayeh";

if (firstName1 > lastName1) {
  console.log(`Your first name, Asabeneh is longer than your family name`);
} else {
  console.log(`Your first name, Asabeneh is longer than your family name`);
}

let myAge = 28;
let yourAge = 24;

if (myAge > yourAge) {
  console.log(`I am  ${myAge - yourAge} years older than you`);
} else {
  console.log(`I am ${yourAge - myAge} years older than you`);
}

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = parseInt(prompt("Enter birth year"));
let mainYear = 2023;
let mainAge = mainYear - birthYear;

if (mainAge <= 18) {
  console.log(
    `You are ${mainAge}.You will be allowed to drive after ${
      18 - mainAge
    } years.`
  );
} else {
  console.log(`You are 25. You are old enough to drive`);
}

const secondsInYear = 31536000; // Number of seconds in one year
const yearsLived = parseInt(prompt("Enter number of years you have lived:"));

// Calculate the number of seconds the person has lived
const secondsLived = yearsLived * secondsInYear;

console.log(`You have lived ${secondsLived} seconds.`);

const now = new Date();

let years = now.getFullYear();
let month = now.getMonth();
let days = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

console.log(`${years}-${month}-${days} ${hours}:${minutes}`);
console.log(`${days}/${month}/${years} ${hours}:${minutes}`);
console.log(`${days}-${month}-${years} ${hours}:${minutes}`);
