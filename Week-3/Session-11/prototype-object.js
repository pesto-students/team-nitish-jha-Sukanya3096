"use strict";

const person = function (name, age, email) {
  this.age = age;
  this.name = name;
  this.email = email;
};

// adding methods through prototype so that all instances of person constructor function will inherit the methods
// so this method is not attached to every single instance, but can be used through prototypal inheritance
person.prototype.getAge = function () {
  return this.age;
};

person.prototype.setAge = function (age) {
  this.age = age;
};

const me = new person("Sukanya", 27, "isukanyadutta@gmail.com");

// making property read-only through defineProperty
Object.defineProperty(me, "email", {
  writable: false,
  configurable: false,
});
Object.defineProperty(me, "name", {
  writable: false,
  configurable: false,
});

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `Driving ${this.make} ${this.model} ${this.year}`;
  }
}

// ES6 class inheritance
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getDetails() {
    return `Driving ${this.make} ${this.model} ${this.year} with ${this.numDoors}`;
  }
}

const car1 = new Car("Maruti", "Dzire", 1996, 4);
const vehicle1 = new Vehicle("Maruti", "Dzire", 1996);
console.log(car1.getDetails());
console.log(vehicle1.getDetails());
