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

let x = parseInt(prompt("Enter a number"));
let y = 2 * x - 2;
console.log(`The variables y is equal to ${y}`);
