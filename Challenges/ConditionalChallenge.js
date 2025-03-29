// Checking if a number is greater than another number:

let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2} `);
} else if (num1 < num2) {
  console.log(`${num2} is greater than ${num1} `);
} else {
  console.log();
  console.log(`${num1} is equal to ${num2} `);
}

// Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username === anotherUsername) {
  console.log(`${username} and ${anotherUsername} are Strings`);
}

//Checking if a variable is a number or not:

let score = "44";

console.log(score instanceof Number);

//Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log(`True`);
} else {
  console.log(`False`);
}

// Checking if an array is empty or not:

let EmptyArray = [];

if (EmptyArray.length === 0 ) {
  console.log(`Array is Empty`);
}
else{
    console.log(`Array is not Empty`)
}
