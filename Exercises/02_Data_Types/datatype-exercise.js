// Day 2: Exercises
//Exercise: Level 1

let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(4, 10));
console.log(challenge.substr(4, 10));
console.log(challenge.substring(3, 21));
console.log(challenge.slice(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(challenge.split(""));
console.log(challenge.split(","));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let indexOfTxt =
  "You cannot end a sentence with because because because is a conjunction";
console.log(indexOfTxt.indexOf("because"));

console.log(indexOfTxt.search("because"));

let stringTrim = " 30 Days of JavaScript  ";
console.log(stringTrim.trim());

let stringStartAndEnd = "JavaScript is fun";
console.log(stringStartAndEnd.startsWith("J"));
console.log(stringStartAndEnd.endsWith("fun"));

let regExA = /a/gi;
console.log(challenge.match("a"));
console.log(challenge.match(regExA));
console.log(challenge.match(regExA).length);

let firstString = "30 Days of ";
let secondString = "JavaScript ";
console.log(firstString.concat(secondString));
console.log(firstString.concat(secondString).repeat(2));

//Exercise: Level 2

let firstNum = 10; // number
let secondNum = "10"; // string
let thirdNum = parseInt(secondNum); //change to number
console.log(typeof firstNum == typeof thirdNum);

let floatNum = parseFloat("9.8");
floatNum = parseFloat(floatNum);
console.log(Math.round(floatNum));
console.log(Math.ceil(floatNum) == firstNum);

let py = "python";
let stringJargon = "Jargon";
console.log(py.includes("on"), stringJargon.includes("on"));

let sentence = "I hope this course is not full of jargon.";
let wordToFind = "jargon";

let message = sentence.includes(wordToFind)
  ? `The sentence "${sentence}" contains the word "${wordToFind}".`
  : `The sentence "${sentence}" does not contain the word "${wordToFind}".`;

console.log(message);

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

let From50To100 = Math.floor(Math.random() * 50);
console.log(From50To100 + 50);

let js = "Javascript";
console.log(Math.floor(Math.random() * js.length));

let sentence1 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence1.substr(31, 24));

//Alternate

let phraseToSlice = "because because because";
let startIndex = sentence1.indexOf(phraseToSlice);
let endIndex = phraseToSlice.length;

startIndex !== -1
  ? console.log(sentence1.substr(startIndex, endIndex))
  : console.log("Not found");

//Exercises: Level 3

let sentence2 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

let regExLove = /love/gi;
console.log(sentence2.match(regExLove));
console.log(sentence2.match(regExLove).length);

let regExBecause = /because/gi;
console.log(sentence1.match(regExBecause).length);

const stringToClean =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let cleanString = stringToClean.replace(/[!@#$%^&*]+/gi, "");
console.log(cleanString);

let txt =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let regExNumber = /\d+/g;
let regExNumber2 = txt.match(regExNumber); // ['5000', '10000', '15000']

let monthlySalary = parseInt(regExNumber2[0]);
let annualBonus = +regExNumber2[1];
let onlineCourseBonus = Number(regExNumber2[2]);
let totalInCome = monthlySalary * 12 + annualBonus + onlineCourseBonus * 12;
console.log(totalInCome);


