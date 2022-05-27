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
