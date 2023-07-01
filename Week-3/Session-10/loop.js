"use strict";

function drawTriangle(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    // inner loop for printing the stars
    for (let j = 1; j <= i; j++) {
      string += "*";
    }
    // adding new line
    string += "\n";
  }
  console.log(string);
}

drawTriangle(4);
