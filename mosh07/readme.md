## Integration with JavaScript

### Code

- Code: [Integration with JavaScript](./index.ts)

### Summary

- To include JavaScript code in a TypeScript project, we need to enable the **allowJs** setting in tsconfig
- JavaScript code included in TypeScript projects is not type-checked by default.
- We can enable type checking by enabling the **checkJs** setting in tsconfig.
- We can optionally turn off compiler errors on a file-by-file basis by appliying **// @ts-nocheck** once on top of JavaScript files.
- When migrating a large JavaScript project to TypeScript, we might face numerous errors. In such cases, it's easier to disable **checkJs** and apply **// @ts-check**(the opposite of **// @ts-nocheck**) on individual files to migrate them one by one.
- We have two ways to describe type information for JavaScript code: using JSDoc and declaration(type definition files)
- Type definition files are similar to header files in C. They describe the features of a module
- We don't need to create type definition files for third-party JavaScript libraries. We can use type definition files from the Definitely Typed Github repository(@types/<package>)
- Newer JavaScript libraries come with type definition files. So there's no need to install type definition files separately.
