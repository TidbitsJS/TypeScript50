/*
 * creating classes
 * creating objects
 * Read-only and Optional properties
 * Access Control Keyword (public, private, protected)
 */
class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;

    // calculate tax
    const tax = this._calculateTax();
    console.log(tax);
  }

  private _calculateTax(): number {
    if (this._balance <= 0) return 0;
    else return this._balance * 1.5;
  }

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);

console.log(account);
console.log(typeof account);
console.log(account instanceof Account);

console.log(account.getBalance());

/*
 * Parameter Properties
 * getters and setters
 */
class AccountPro {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let accountPro = new AccountPro(1, "Mosh", 1000);
accountPro.deposit(500);

console.log(accountPro.balance);
accountPro.balance = 100;
console.log(accountPro.balance);

/*
 * Index Signatures
 */
class SeatAssignment {
  // A1, A2, ...
  // Mosh, John, ...
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "John";

/*
 * Static Members
 */
class Ride {
  private static _activeRides: number = 0;

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

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

/*
 * Inheritance
 * Method Overriding
 * Polymorphism
 * Protected Members
 */
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("Walk");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let student = new Student(1, "John", "Doe");
console.log(student.fullName);
student.takeTest();

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

function printName(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

printName([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

/*
 * Abstract Classes and Methods
 */
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

/*
 * Interfaces
 */
abstract class Calendar {
  constructor(public name: string) {}

  abstract addEvent(): void;
  abstract removeEvent(): void;
}

interface CalendarPro {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends CalendarPro {
  sync(): void;
}

class GoogleCalendar implements CalendarPro {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
