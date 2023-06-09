//!Iterate 0 to 10 using for loop, do the same using while and do while loop
//For
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//While
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//Do while
var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

//!Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

var i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

//Iterate 0 to n using for loop
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

//Write a loop that makes the following pattern using console.log():

let pattern = "";
for (let i = 0; i <= 6; i++) {
  pattern += "#";
  console.log(pattern);
}

//10 qeder vurma cedveli

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//

console.log("i  i^2  i^3");
for (let i = 0; i <= 10; i++) {
  let square = i * i;
  let cube = i * i * i;
  console.log(i + "  " + square + "  " + cube);
}

var i = 0;
while (i <= 10) {
  let square = i * i;
  let cube = i * i * i;
  console.log(i + "  " + square + "  " + cube);
  i++;
}
