"use strict";

function drawTriangle(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

drawTriangle(4);
