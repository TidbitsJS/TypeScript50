## Classes, Interfaces and Object Oriented Programming

### Code

- Exercise: [Classes, Interfaces and Object Oriented Programming Exercise](./exercise.ts)
- Code: [Classes, Interfaces and Object Oriented Programming](./objectOriented.ts)

### Summary

- Object-oriented programming is one of the many programming paradigms(styles of programming) in which objects are the building blocks of applications
- An object is a unit that contains some data represented by properties and operations represented by methods.
- A class is a blueprint for creating objects. The term class and object are often used interchangeably.
- We use access modifiers(public, private, protected) to control access to properties and methods of a class.
- A constructor is a special method(function) within a class that is called when instances of that class are created. We use constructors to initialize properties of an object.
- Static members are accessed using the class name. We use them where we need a single instance of a class member(property or method) in memory.
- Inheritance allows a class to inherit and reuse members of another class. The providing class is called the _parent_, _super_, or _base_ class while the other class is called the _child_, _sub_, or _derived_ class.
- An abstract class is a class with partial implementation. Abstract classes cannot be instantiated and have to be inherited.
- We use interfaces to define the shape of objects.

### Interface vs Types

In TypeScript, interfaces and type aliases can be used interchangeably

Both can be used to describe the shape of an object:

**Interface**

```typescript
interface Person {
  name: string;
}

let person: Person = {
  name: "Mosh",
};
```

**Type**

```typescript
type Person = {
  name: string;
};

let person: Person = {
  name: "Mosh",
};
```

A class can also implement an interface or a type alias:

```typescript
class MyCalendar extends MyInterface {}
class MyCalendar extends MyType {}
```

It's more conventional to use an interface in front of the **extends** keyword, though.

### Cheatsheet

**Classes and constructors**

```typescript
class Account {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

let account = new Account(1);
```

**Accessing properties and methods**

```typescript
account.id = 1;
account.deposit(10);
```

**Read-only and optional properties**

```typescript
class Account {
  readonly id: number;
  nickname?: string;
}
```

**Access Modifiers**

```typescript
class Account {
  private _balance: number;

  // Protected members are inherited
  // Private members are not
  protected _tacRate: number;
}
```

**Parameter properties**

```typescript
class Account {
  // With parameter properties we can
  // create and initialize properties in one place.
  constructor(public id: number, private _balance: number) {}
}
```

**Getters and setters**

```typescript
class Account {
  private _balance = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error();
    this._balance = value;
  }
}
```

**Index signatures**

```typescript
class SeatAssignment {
  // With index signature properties we can add
  // properties to an object dynamically
  // withou losing type safety.
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
```

**Static members**

```typescript
class Ride {
  static activeRides = 0;
}

Ride.activeRides++;
```

**Inheritance**

```typescript
class Student extends Person {}
```

**Method overriding**

```typescript
class Student extends Person {
  override speak() {
    console.log("Student speaking");
  }
}
```

**Abstract classes and methods**

```typescript
abstract class Shape {
  // Abstract methods don't have a body
  abstract render();
}

class Circle extends Shape {
  override render() {
    console.log("Rendering a circle");
  }
}
```

**Interfaces**

```typescript
interface Calendar {
  name: string;
  addEvent(): void;
}

class GoogleCalendar implements Calendar {}
```

### Compiler Options

| Option             | Description                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| noImplicitOverride | When enabled, then compiler will warm us if we try to override a method without using the override keywoed |
