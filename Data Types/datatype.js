//Data Types
//Primitive data types

let num = 10;
let string = "Asim";
let booleanData = true;
let carColor;
let nullData = 0;

// Primitive data types are immutable(non-modifiable) data types.

let js = "Javascript";
js[0] = "Y";
console.log(js);

//Compare primitive data types

let myIntenger = 10;
let myFloat = 11.5;
console.log(myIntenger == myFloat); //False

let az = "Azerbaijan";
let aze = "Azerbaijan";
console.log(az == aze); // True

//Non-Primitive Data Types

let numsArray = [6, 15, 20];
numsArray[0] = 15;
console.log(numsArray);

let numsArray1 = [6, 15, 20];
console.log(numsArray == numsArray1); //false

let userOne = {
  name: "Asim",
  age: 28,
  isMarried: false,
};

let userTwo = {
  name: "Asim",
  age: 28,
  isMarried: false,
};

console.log(userOne == userTwo);

//Numbers
//Math Object

const PI = Math.PI;

console.log(Math.floor(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

const maxArray = [4, -5, 66, 7, 8, -9, 1011];
console.log(Math.max(...maxArray));
console.log(Math.min(...maxArray));

//Random Number Generator

let randonNumber = Math.random() * 11;
console.log(Math.floor(randonNumber));

//Generate number from 50 to 90
let randomNum50to90 = Math.floor(Math.random() * (90 - 50 + 1)) + 50;
console.log(randomNum50to90);

//String
//String Concatenation

let name = "Asim ";
let surname = "Ehmed";
console.log(name + surname);
console.log(name.concat(surname));

//Template Literals (Template Strings)

console.log(`My name is ${name} and surname is ${surname}`);

//String Methods
//length

let countryName = "Azerbaijan";
console.log(countryName.length);

//Accessing characters in a string

let accessCountryLetter = countryName[2];
console.log(accessCountryLetter);

//toUpperCase(), toLowerCase()

console.log(countryName.toUpperCase());
console.log(countryName.toLowerCase());

//substring

console.log(countryName.substring(4, 8));

//Split

console.log(countryName.split(""));
console.log(countryName.split(","));
console.log(countryName.split(" "));

//Includes

let stringIncludes = "Javascript is fun";
console.log(stringIncludes.includes("fun")); //true
console.log(stringIncludes.includes("fun")); //false

//Index of

let stringIndexOf = "30 Days Of JavaScript";
console.log(stringIndexOf.indexOf("Of")); //ouptut 8

//Startwith and Endwith

console.log(stringIndexOf.startsWith("30"));
console.log(stringIndexOf.endsWith("30"));

//Search

const text =
  "I love JavaScript. If you do not love JavaScript what else can you love";
const regex = /love/gi;
const loveWord = text.match(regex);
console.log(loveWord); // Output: (3) ['love', 'love', 'love']
const count = (text.match(regex) || []).length;

console.log(count); // Output: 2

let txt =
  "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
let regEx = /\d+/g;
let regExW = /\w+/g;
console.log(txt.match(regExW));
console.log(txt.match(regEx));

// Repeat

let stringRepeat = "I love you ";
console.log(stringRepeat.repeat(10));
