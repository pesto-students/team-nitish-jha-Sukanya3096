"use strict";

class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `${this.name} is ${this.nationality} ${this.gender} of age ${this.age}`;
  }
}

const martha = new Person("Martha", 36, "female", "American");
const john = new Person("John", 66, "male", "English");
const sukanya = new Person("Sukanya", 27, "female", "Indian");

console.log(martha.introduce());
console.log(john.introduce());
console.log(sukanya.introduce());

// using inheritance between ES6 classes
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return `${this.name} is studying ${this.subject}`;
  }
}

const sneha = new Student("Sneha", 20, "female", "Indian", "Mathematics");
console.log(`${sneha.introduce()}. ${sneha.study()}`);
