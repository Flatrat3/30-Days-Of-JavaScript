//Booleans
//Example: Boolean Values

let isRaining = true;
let isMarried = false;
let trueValue = 4 > 2;
let falseValue = 10 < 6;
console.log(typeof trueValue);

//Undefined

let undefinedData;
console.log(undefinedData);

//Operators
//Assignment operators

let x = 100;
let y = 5;

let z = (x += y);
console.log(z);
console.log(x * y);
console.log(x + y);
console.log(x - y);
console.log(x / y);

const PI = 3.14;
let radius = 60;
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);

//Logical Operators
// && ampersand operator example

const check = 4 > 3 && 8 > 6; //true
const check2 = 4 < 2 && 6 > 4; //false
const check3 = 2 < 1 && 5 > 10; //false
console.log(check, check2, check3);

// || pipe or operator, example

const checkPipe = 4 > 7 || 8 > 6; //true
const checkPipe2 = 4 < 2 || 6 > 8; //false
const checkPipe3 = 2 > 1 || 10 > 9; //true
console.log(checkPipe, checkPipe2, checkPipe3);

//! Negation examples

let isLightOff = true;
console.log(!isLightOff);

let numA = 10 < 3;
console.log(!numA);

//Increment and Decrement Operators
//Pre-increment

let count = 6;
count++;
console.log(count);

//Decrement
let count1 = 7;
--count;
console.log(count1);

//Ternary Operators

let ageLimit = 18;
18 >= 12
  ? console.log(`${ageLimit} is greater than 12`)
  : console.log(`This is false `);

//Windows Methods
//Window alert() method

// alert("Hello World");

//Window prompt() method

// let takeInput = parseInt(prompt("Enter a number"));
// console.log(takeInput);

//Window confirm() method

// const agree = confirm("Are you sure you like to delete");
// console.log(agree);

//Data Object

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
console.log(now.getDay());

// Formatting Date Objects
let dateString = now.toDateString();
let dateString1 = now.toLocaleDateString();
console.log(dateString);
console.log(dateString1);
