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

#

### Custom Ambient Declarations

To make globals known and defined, we can use ambient type declarations.

```typescript
declare const isDevelopment: boolean;
```

`const isDevelopment` is the part that’s taken directly from JavaScript.

The `declare` keyword in front of it tells TypeScript that we want to make known that this constant exists.

The part after `const isDevelopment` is a type annotation

> Ambient declarations are not only useful for global flags but also if you have functions and objects that you expect to exist.

#

### Tooling

We can install the TypeScript command-line tool globally on our machine:

```bash
npm install -g typescript
```

With that, we get a tool called `tsc`, the TypeScript compiler.

The TypeScript compiler’s primary task is to take TypeScript code and compile it down to regular JavaScript.

Initialize the TypeScript compiler:

```bash
tsc --init
```

We get a prefilled tsconfig.json - main configuration file for TypeScript.

Editors pick it up and behave accordingly, and when you run tsc in your terminal, TypeScript also refers to this file.

tsconfig.json should look:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "es2020",
    "allowJs": true,
    "checkJs": true,
    "typeRoots": ["@types", "node_modules/@types"],
    "esModuleInterop": true
  }
}
```

There are a few settings and flags that are preset and are very useful once we compile TypeScript code to JavaScript code:

1. Target

   Once we compile TypeScript down to JavaScript, we need to define a target language specification.

   Can be one of any recent or current ECMAScript standards, such as ES3 for ancient browsers, ES5 for legacy runtimes, or everything from ES2015 to this year’s specification.

   If you always go for the latest and greatest, use _ESNEXT_.

2. Modules

   Compiler flag that is important while working with modules if we do imports and exports in TypeScript.

3. esModuleInterop

   If you want to mix modules from different module systems like ES Modules and CommonJS, you can set this flag to true , and TypeScript will take care of compatibility.

4. allowJs

   lag tells TypeScript to allow a reference to regular JavaScript files.

5. checkJs

   flag is similar to the _//@ts-check_ com- ment we used earlier.

   It tells TypeScript to type-check JavaScript files.

6. typeRoots

   List of directories that TypeScript will look for when looking for types.

To check type-check run the following command in terminal:

```bash
tsc --noEmit
```

tsc will pick up settings from tsconfig.json. The parameter `--noEmit` tells TypeScript that we just want to check types and not create any output files.

If you want to regularly type-check your code during development, you can add a watch mode so TypeScript reruns type-checking every time you save a file.

```bash
tsc --noEmit --watch
```
