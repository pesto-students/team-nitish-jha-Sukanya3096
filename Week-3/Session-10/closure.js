"use strict";

"use strict";

// initializing the arrays to store the values
let firstValues = [];
let secondValues = [];

// function to increment count
function counter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

// creating instances of counter function
const firstCounter = counter();
const secondCounter = counter();

//pushing the values in array
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log(firstValues, secondValues);
