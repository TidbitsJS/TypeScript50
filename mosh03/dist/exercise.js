"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    write() {
        console.log("Writing in the file", this.fileName);
    }
}
let exerciseFile = new Logger("Exercise.ts");
exerciseFile.write();
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let meow = new Person("Tom", "Meow");
console.log(meow.fullName);
class Employee extends Person {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
    get showSalary() {
        return `${this.firstName} ${this.lastName} has a salary of $${this.salary}/month`;
    }
}
let tom = new Employee(5000, "Tom", "Meow");
console.log(tom.showSalary);
let employee = {
    name: "John Smith",
    salary: 50000,
    address: {
        street: "Flinders st",
        city: "Melbourne",
        zipCode: 3144,
    },
};
console.log(employee);
