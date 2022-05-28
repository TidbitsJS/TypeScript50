## Points

- `any` is a special TypeScript type– it does not exist in JavaScript. It accepts any value of any
  type, and is thus a top type, encompassing all other types.
- TypeScript sets `any` as the default type for any value or parameter that is not explicitly typed or can’t be inferred.
- The browser’s JavaScript runtime can’t run TypeScript

> Note that after the compile step you lose all type safety when you run your code: it’s plain JavaScript once it hits browsers.

- TypeScript not only erases all types but also takes modern-day JavaScript features and transpiles them to older ECMAScript versions.
- TypeScript that generates JavaScript is called emitting

### Type Annotations

Declaring type annotations for variables and functions:

```typescript
function addVAT(price: number, vat: number = 0.2): number {
  return price * (1 + vat);
}
```

#

### noEmit flag

```bash
tsc --noEmit
```

- If this flag isn’t set (the default) we always get JavaScript – even when type checks fail.
- If we want to make sure we don’t get any emitted JavaScript output, set noEmitOnError to true in tsconfig.json.

#

### any

any is the default type if we neither specify a type nor let TypeScript infer one.

```typescript
let deliveryAddress; // deliveryAddress is any
```

Explicitly specify the type through an annotation

```typescript
// deliveryAddress is of type any
let deliveryAddress: any = "421 Smashing Hill, 90210";
```

> any can be anything: it’s a top type and, therefore, all other types are part of any .

- Since any can be anything, any also allows us to access properties that might not be there.

> any is a wildcard!

#### Why does something like any even exist?

- due to the nature of JavaScript.

- In JavaScript, you are not bound to a type, and values from any type can appear in your variables and properties.

- any reflects JavaScript’s overarching flexibility

```typescript
// theObject is an object we don’t have a type for,
// but we know exactly what
// we are doing!
(theObject as any).firstLetter.toUppercase();
```

If you want to make sure you don’t have any somewhere in your code you don’t expect it to be, set the compiler flag `noImplicitAny` to `true`.

TypeScript will then make sure that you either assign values to correctly infer types or, in the case of `any`, make sure that you explicitly annotate or cast to `any`.

#

### Typing

- The moment we annotate using the colon syntax, the name is of the type we annotate. We call this technique left-hand typing, as the typing happens before (to the left of) the equals sign.

- Leaving out type annotations and working first with type inference is called right-hand typing.

```typescript
let deliveryAddresses = [
  "421 Smashing Hill, 90210",
  "221b Paw-ker Street",
  "4347 Whiskers-ia Lane",
];

// Type of deliveryAddresses is string[]
let deliveryAddresses: string[] = [];

// OK
deliveryAddresses.push("421 Smashing Hill, 90210");
// Not OK! 2 is not a string
deliveryAddresses.push(2000);
```

- With left-hand typing, you can think a lot about your types before you start coding the rest.

- Right-hand typing allows you to make up types as you go, which might be a little bit more JavaScript-y.
