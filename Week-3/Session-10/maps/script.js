"use strict";

function calcWordFrequencies() {
  const wordFromUser = prompt("Please type words separated by space");

  // take the string and convert to array of words separated by space
  const wordArr = wordFromUser?.split(" ");
  const wordMap = new Map();
  console.log(wordArr);

  /*
  using map
  if element is not found, set the element with it's frequency in a val property in value
  if element is found , increment the val property in value by 1
  Loop through map and output the result
   */
  wordArr.forEach((el) => {
    if (wordMap.get(el)) {
      wordMap.get(el).val++;
    } else {
      wordMap.set(el, { val: 1 });
    }
  });
  for (const [key, value] of wordMap) {
    console.log(`${key} ${value.val}`);
  }
}

calcWordFrequencies();
