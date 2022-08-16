"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function ComponentWithParam(options) {
    return (constructor) => {
        console.log("ComponentWithParam decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponentWithParam = class ProfileComponentWithParam {
};
ProfileComponentWithParam = __decorate([
    ComponentWithParam({ selector: "#myprofile" }),
    Pipe
], ProfileComponentWithParam);
function Log(_target, _methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Person {
    say(name, message) {
        console.log(`${name} says ${message}`);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
let person = new Person();
person.say("Jack", "Hello");
function Capitalize(_target, _methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class PersonPro {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], PersonPro.prototype, "fullName", null);
let personPro = new PersonPro("mosh", "hamedani");
console.log(personPro.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user = new User("1234");
console.log(user.password);
const watchedParameters = [];
function Watch(_target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex,
    });
}
class Vehicle {
    move(_speed) { }
    stop(_speed, _isStop) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
__decorate([
    __param(1, Watch)
], Vehicle.prototype, "stop", null);
console.log(watchedParameters);
