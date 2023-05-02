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
