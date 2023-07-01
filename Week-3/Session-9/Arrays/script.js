"use strict";

let nums = [4, 1, 8];

function divideArray(arr) {
  let oddNum = [];
  let evenNum = [];

  // sorting the array and pushing to either odd array or even array
  arr
    .sort((a, b) => a - b)
    .forEach((element) => {
      if (element % 2 === 0) {
        evenNum.push(element);
      } else {
        oddNum.push(element);
      }
    });

  // console the output
  console.log("Even numbers:");
  if (evenNum.length > 0) {
    evenNum.forEach((element) => console.log(element));
  } else {
    console.log("None");
  }
  console.log("Odd numbers:");
  if (oddNum.length > 0) {
    oddNum.forEach((element) => console.log(element));
  } else {
    console.log("None");
  }
}

divideArray(nums);
