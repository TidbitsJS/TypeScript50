## TS File

Create a file with any good name with `.ts` estension

## Compile

To compile and run the file, use the command `tsc` followed by the file name and `.ts` extension.

Run following command in terminal -

```shell
    tsc main.ts
```

TypeScript compiler will convert the TypeScript script into a JavaScript script.
A new file will be generated in the same folder sturcture named `main.js`

We can't run TypeScript directly. We have to run the generated JavaScript file from the TypeScript one.

Run -

```shell

node main.js

```

> The generated .js file will typically have the same name as the original .ts file.

<hr />

## Compiler Command

Few notable commands -

| Command          	| Description                                                      	|
|------------------	|------------------------------------------------------------------	|
| tsc              	| Run a compile with compiler settings from tsconfig.json          	|
| tsc file_name.ts 	| Transpile just the file_name.ts with compiler defaults           	|
| tsc src/*ts      	| Transpile any .ts file in the src folder with compiler defaults  	|


> The convetion in TypeScipt is to use PasacalCase or camelCase to name identifiers

PascalCase convention - 

```javaScript

Name
FirstName

```

camelCase convention -

```javaScript

name
firstName

```

<hr />
<hr />

## Data Types

1. Generics
2. Decorators
3. Static Types
    * Built-in types
        1. Number
        2. String
        3. Boolean
        4. Void
        5. Null
        6. Undefined
        7. Never
        8. Any
    
    * User defined
        1. Array
        2. Tuple
        3. Enumeration (enum)
        4. Class
        5. Interface