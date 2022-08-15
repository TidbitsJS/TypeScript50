/*
 * Define a class called Logger that takes the name of a file in its constructor and provides
 * a method for writing messages to that file. Don't worry about the actual file I/O
 * operations. Just define the class with the right members.
 */
class Logger {
  constructor(public fileName: string) {}

  write(): void {
    console.log("Writing in the file", this.fileName);
  }
}

let exerciseFile = new Logger("Exercise.ts");
exerciseFile.write();

/*
 * Given the Person class below, create a getter for getting the full name of a person.
 */
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let meow = new Person("Tom", "Meow");
console.log(meow.fullName);

/*
 * Create a new class called Employee that extends Person and adds a new property
 * called salary.
 */

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  get showSalary() {
    return `${this.firstName} ${this.lastName} has a salary of $${this.salary}/month`;
  }
}

let tom = new Employee(5000, "Tom", "Meow");
console.log(tom.showSalary);

/*
 * Given the data below, define and interface for representing employees:
 */
interface IEmployee {
  name: string;
  salary: number;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };
}

let employee: IEmployee = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};

console.log(employee);

export {};
