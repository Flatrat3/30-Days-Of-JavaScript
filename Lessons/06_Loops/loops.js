//!Loops

//for Loop
// For loop structure

/* 
for(initialization, condition, increment/decrement){
    code goes here
  }*/

for (let i = 0; i <= 6; i++);

for (let a = 6; a >= 0; a--);

//Adding all elements in the array

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // sum = sum + numbers[i] // 0 = 0 +1
  console.log(sum);
}

console.log(sum);

const numbers1 = [6, 7, 8, 9];
const arr = [];

for (let i = 0; i < numbers1.length; i++) {
  arr.push(numbers1[i] ** 2);
  console.log(arr);
}

console.log(arr);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

//while loop
const numbers2 = [1, 6, 9, 4, 5];
let a = 0;

while (a < numbers2.length) {
  console.log(numbers2[a]);
  a++;
}

/* 
const password = "my_password";
let userInput = prompt("Enter a password");

while (userInput !== password) {
  userInput = prompt("Wrong password. Try again");
}

alert("Acess granted!");*/

/* 

const targetNumber = 8; // hedef sayı

let guess = parseInt(prompt("0-10 arasında bir sayı tahmin edin:")); // kullanıcı tahmini

while (guess !== targetNumber) {
  // tahmin yanlış olduğu sürece devam et
  if (guess < targetNumber) {
    guess = parseInt(prompt("Sayı daha büyük! Tekrar tahmin edin:"));
  } else {
    guess = parseInt(prompt("Sayı daha küçük! Tekrar tahmin edin:"));
  }
}

alert("Tebrikler, doğru tahmin ettiniz!");*/

//do while loop

/* 
let newPassword;

do {
  newPassword = prompt("Lütfen parolanızı girin:");
} while (newPassword !== "1234");

alert("Parolanız doğru!");*/

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 15);

//for of loop

const newNumbers = [1, 4, 6, 7];
for (const num of newNumbers) {
  console.log(num);
}

let country = ["Azerbaijan", "Turkey", "USA", "France", "Russia"];
for (let newCountry of country) {
  console.log(newCountry);
}

//break

let numbers3 = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < numbers3.length; i++) {
  if (i === 3) {
    break;
  }
  console.log(numbers3[i]);
}

//Continue

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] % 2 === 0) {
    continue;
  }
  console.log(numbers4[i]);
}
