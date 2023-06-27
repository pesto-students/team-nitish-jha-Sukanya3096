"use strict";

// inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving ${make} ${model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// polymorphism
class Shape {
  constructor() {}
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const my_rectangle = new Rectangle(2, 4);
const my_triangle = new Triangle(4, 5);
const my_circle = new Circle(4);

console.log(my_rectangle.calculateArea());
console.log(my_triangle.calculateArea());
console.log(my_circle.calculateArea());

// Abstraction and Encapsulation
class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }
}

class CheckingAccount extends BankAccount {
  constructor(balance) {
    super();
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  withdraw(amount) {
    this.balance = this.balance - amount;
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(balance) {
    super();
    this.balance = balance;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance = this.balance - amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}

const checkAcc = new CheckingAccount(2000);
checkAcc.deposit(2000);
checkAcc.withdraw(2000);
console.log(checkAcc.getBalance());

const savingsAcc = new SavingsAccount(2000);
savingsAcc.deposit(2000);
savingsAcc.withdraw(2000);
console.log(savingsAcc.getBalance());
