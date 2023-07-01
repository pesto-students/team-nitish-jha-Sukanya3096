"use strict";

class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }
  cube(num) {
    return num * num * num;
  }
  power(num1, num2) {
    [num1, num2] = [num2, num1];
    return num1 ** num2;
  }
}

const calc = new ScientificCalculator();

// returning sum using call method
const addCalc = calc.add;
console.log(addCalc.call(Calculator, 10, 5));

// returning subtraction using apply method
const subCalc = calc.subtract;
console.log(subCalc.apply(Calculator, [10, 5]));

// returning multiplication by 2 using bind method
const mulCalc = calc.multiply;
const multiplyByTwo = mulCalc.bind(this, 2);
console.log(multiplyByTwo(10));
console.log(multiplyByTwo(5));

// returning power of 3 for number 4 using bind method
const powerCalc = calc.power;
const powerOfThree = powerCalc.bind(this, 3);
console.log(powerOfThree(4));
console.log(powerOfThree(2));
