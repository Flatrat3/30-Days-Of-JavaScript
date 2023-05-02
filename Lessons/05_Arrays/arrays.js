//Array
//Arrays
//How to create an empty array

//Using Array constructor

let differentValue = [
  "Asim",
  25,
  false,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "Redux", "React"] },
];

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let companiesArray = companiesString.split(", ");
console.log(companiesArray[0]);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

let lastIndex = webTechs.length - 1;
console.log(webTechs[lastIndex]);

//Modifying array element

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries[0] = "Azerbaijan";
let lastIndex1 = countries.length - 1;
countries[lastIndex1] = "Korea";
console.log(countries);

//Creating static values with fill

const sixXvalues = Array(6).fill("Asim");
console.log(sixXvalues);

const tenLoveValues = Array(10).fill("Love");
console.log(tenLoveValues);

//Concatenating array using concat

let firstList = [1, 2, 3];
let secondList = [4, 5, 6];
let allList = firstList.concat(secondList);
console.log(allList);

//Getting array length

let cities = ["Baku", "Ganja", "Sumgait"];
console.log(cities.length);

//Getting index an element in arr array

let programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "PHP",
  "Swift",
];
let index = programmingLanguages.indexOf("Swift");

if (programmingLanguages == -1) {
  console.log("Not found");
} else {
  console.log("Found at index " + index);
}

console.log(programmingLanguages.includes("PHP"));

//Checking array

let myArray = [1, 2, 3, 4];

if (Array.isArray(myArray) == true) {
  console.log("My array is a array");
} else {
  console.log("My array is not a array");
}

console.log(Array.isArray(myArray));

//Converting array to string

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
let namesToString = names.toString();
console.log(namesToString);

//Joining array elements

let myArray1 = ["JavaScript", "Python", "Java", "C++"];
let myArray1Join = myArray.join(" | ");
//we can pass different string parameter

console.log(myArray1Join);

//Slice out

let myArray2 = ["JavaScript", "Python", "Java", "C++", "PHP"];
console.log(myArray2.slice(1, 4));

//Splice method in array

let myArray3 = ["JavaScript", "Python", "Java", "C++", "PHP"];
let deletedElements = myArray3.splice(2, 2, "Ruby", "Swift");

console.log(myArray3); // ["JavaScript", "Python", "Ruby", "Swift", "PHP"]
console.log(deletedElements); // ["Java", "C++"]

//Adding item to an array using push

let newArray = ["item1", "item2", "item3"];
let newArrayAdd = newArray.push("item4");
console.log(newArray);

//Add an element from the beginning
let addItemToBeginnig = newArray.unshift("item0");
console.log(newArray);

//Removing the end element using pop

let myArray4 = ["JavaScript", "Python", "Java", "C++", "PHP"];
let lastElement = myArray4.pop();

console.log(myArray4); // ["JavaScript", "Python", "Java", "C++"]
console.log(lastElement); // "PHP"

//Removing an element from the beginning
let firstElement = myArray4.shift();
console.log(firstElement);
console.log(myArray4);
console.log(myArray4.reverse());
console.log(myArray.sort());

//Array of arrays

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack[0]);
