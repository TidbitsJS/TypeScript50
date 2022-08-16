/*
 * Class Decorator
 */
function Component(constructor: Function) {
  console.log("Component decorator called");

  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}

/*
 * Parameterized Decorators
 * Decorator Factory
 * Decorator Composition
 */
type ComponentOptions = {
  selector: string;
};

function ComponentWithParam(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("ComponentWithParam decorator called");

    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

@ComponentWithParam({ selector: "#myprofile" })
@Pipe
class ProfileComponentWithParam {}

/*
 * Method Decorators
 */
function Log(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value as Function;

  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Person {
  @Log
  say(name: string, message: string) {
    console.log(`${name} says ${message}`);
  }
}

let person = new Person();
person.say("Jack", "Hello");

/*
 * Accessor Decorators
 */
function Capitalize(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class PersonPro {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personPro = new PersonPro("mosh", "hamedani");
console.log(personPro.fullName);

/*
 * Property Decorators
 */
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user = new User("1234");
console.log(user.password);

/*
 * Parameter Decorators
 */
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(_target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch _speed: number) {}
  stop(_speed: number, @Watch _isStop: boolean) {}
}

console.log(watchedParameters);
