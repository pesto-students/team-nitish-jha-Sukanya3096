"use strict";

function* genStrings(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    yield Symbol(arr[i]);
  }
}

const arrStr = ["hello", "world", "test"];
const generator = genStrings(arrStr);

for (let value of generator) {
  console.log(value);
}
