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

| Command          | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| tsc              | Run a compile with compiler settings from tsconfig.json         |
| tsc file_name.ts | Transpile just the file_name.ts with compiler defaults          |
| tsc src/\*ts     | Transpile any .ts file in the src folder with compiler defaults |

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
