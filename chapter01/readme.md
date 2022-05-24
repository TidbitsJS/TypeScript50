## Points

- TypeScript points out potential errors before your code hits the production environment
- TypeScript provides code analysis for JavaScript
- Under the hood, TypeScript is already active in VS Code
- By adding `//@ts-check` to the top of your file, you can get TypeScript to check your code for errors.

#

### Features

1. Type Check

   - Making sure you use the correct names for the things you want to use.
   - No more typos, no more wrong spellings or mixed up terms.

2. Type Inference

   - The moment you assign a value to a variable, TypeScript tries to infer the type from the assignment.

3. Semantic Checks

   - Differentiate between multiple types of the same basic type.

#

### Type

A classification of data that defines the operations that can be done on that data, the meaning of the data, and the set of allowed values.

Typing is checked by the compiler and/or run time to ensure the integrity of the data, enforce access restriction, and interpret the data.

Primitive types:

- number
- string
- boolean

Composite types:

- objects: properties and values of different primitive and composite types
- arrays: lists of values which can take any type
- functions: methods you call with parameters of certain types, and which return values of certain types

`JavaScript, however, is weakly typed`: Even though you create a variable or property and assign a value of a certain type, you can switch types on the run

```javascript
let val = 1234; // OK!
val = "Onetwothreefour"; // Reassignment. Still OK!
```

`TypeScript is strongly typed`: Once you assign a value of a certain type, TypeScript wants you to stick with it.

You can’t use operators on values of different types, as they usually don’t make sense:

```javascript
// You want to add a number to an object? Why??
let val = { a: 3 } + 5;
```

Sample person object,

```javascript
const person = {
  firstName: "Stefan",
  lastName: "Baumgartner",
  age: 38,
};
```

`person` is of type object, but follows the shape: `firstName` is a string; `lastName` is a string; and `age` is a number.

Custom type,

```javascript
type Person = {
  firstName: string,
  lastName: string,
  age: number,
};
```

#

### JSDoc

Way to annotate code using comments. We describe function signatures, object properties, and much more by using certain conventions

With a JSDoc type annotation, we can declare which object properties we expect to exist, and make sure that TypeScript knows what to expect.

#

### Custom Type Declarations

While JSDoc can get you very far, it can be a little unwieldy at times, especially when you want to define complex, nested object shapes, or want to reuse types over different files.

You end up with a lot of comments and a lot of subtypes. Most likely, this will clutter your codebase more than it will help.

To make it easier for us to define custom types, describe global function interfaces, or share types between different parts of our JavaScript application, we can use type declaration files.

```javascript
// types
type StorageItem = {
  weight: number,
};

type ShipStorage = {
  max: number,
  items: StorageItem[],
};

const storage = {
  max: undefined,
  items: [],
};
```

TypeScript supports type declaration files that end with .d.ts.
