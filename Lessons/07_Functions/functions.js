//!Functions
//Functions Decloration

function greetings() {
  console.log("Hello World");
}

greetings(); //Output: Hello World

//Function without a parameter and return

function add() {
  let num = 4;
  console.log(num * num);
}

add(); //Output : 16

//Get random number
function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
}

getRandomNumber(); //Output : random number every time

//Get currentDay
function getCurrentDay() {
  const weeks = [
    " Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday.",
  ];

  const currentDay = new Date().getDay();
  console.log(`Today is` + weeks[currentDay]);
}
getCurrentDay(); //Output: Monday

//Function returning value
function getRandomColor() {
  let colors = ["red", "blue", "green", "yellow", "black", "white"];
  const randomIndex = colors[Math.floor(Math.random() * colors.length)];
  return randomIndex;
}

console.log(getRandomColor());

//Function with a parameter

function areaOfCircle(r) {
  return Math.PI * r * r;
}

console.log(areaOfCircle(10));

function sayHello(name) {
  let fullHello = console.log(`Hello ${name}`);
  return fullHello;
}
sayHello("Asim");

//Function with two parameters

function add(x, y) {
  console.log((x += y));
}

add(4, 20);

function calculateRectangleArea(base, height) {
  let rectangleArea = 0.5 * base * height;
  return rectangleArea;
}

console.log(calculateRectangleArea(12, 15));

function fullName(name, lastName) {
  return `${name} ${lastName}`;
}

console.log(fullName("Asim", "Ehmed"));

//Function with many parameters

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 6, 43, 34, 75];

console.log(sumArrayValues(numbers));

//Function with unlimited number of parameters
//Unlimited number of parameters in regular function

function sumAllNumbers() {
  console.log(arguments);
}

sumAllNumbers(1, 2, 4, 6); //Output: Arguments(4) [1, 2, 4, 6, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function sumNumberInArray() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumNumberInArray(1, 5, 7, 8, 0, 23)); //44

//Unlimited number of parameters in arrow function

const sumAllNumbers1 = (...args) => {
  console.log(args);
};
sumAllNumbers1(1, 4, 5, 6);

const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 4, 5, 6, 7, 7)); //Output: 30

//Arrow Function

const square = (n) => {
  return n * n;
};

console.log(square(7));

const square1 = (n) => n * n;
console.log(square1(10));

//Change UpperCase
const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Azerbaijan", "Turkey", "England", "Georgia", "Iran"];
console.log(changeToUpperCase(countries));

//Print Full Name
const printFullName = (firstname, lastname) => {
  return `${firstname} ${lastname}`;
};

console.log(printFullName("Asim", "Ehmed"));

//Functions with default parametrs

const newGreeting = (name1 = "Asim", lastName1 = "") => {
  return `Hello ${name1} ${lastName1}`;
};

console.log(newGreeting("Asim"));

