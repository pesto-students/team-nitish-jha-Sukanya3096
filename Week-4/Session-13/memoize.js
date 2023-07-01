"use strict";

const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

// to get temperature for a city
function getTemperatureForCity(city) {
  return temperatureData[city];
}

const memoize = (func) => {
  let cache = {};

  // creating a closure to have cache as private to the memoize function
  return function (...args) {
    let item = args[0];
    if (item in cache) {
      return cache[item];
    } else {
      let value = func(item);
      cache[item] = value;
      return value;
    }
  };
};

// to check the decrement in time taken
console.time();
const efficient = memoize(getTemperatureForCity);
console.log(efficient("London"));
console.timeEnd();

console.time();
console.log(efficient("London"));
console.timeEnd();
