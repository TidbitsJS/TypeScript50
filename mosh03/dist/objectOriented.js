"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
        const tax = this._calculateTax();
        console.log(tax);
    }
    _calculateTax() {
        if (this._balance <= 0)
            return 0;
        else
            return this._balance * 1.5;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());
class AccountPro {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let accountPro = new AccountPro(1, "Mosh", 1000);
accountPro.deposit(500);
console.log(accountPro.balance);
accountPro.balance = 100;
console.log(accountPro.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "John";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walk");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let student = new Student(1, "John", "Doe");
console.log(student.fullName);
student.takeTest();
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
printName([
    new Student(1, "John", "Smith"),
    new Teacher("Mosh", "Hamedani"),
    new Principal("Mary", "Smith"),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
class Calendar {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
