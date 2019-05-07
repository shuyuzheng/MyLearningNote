# ECMAScript 6 (ES6)

ECMAScript is a standardized version of JavaSscript. ES6 is the most recent
standardized version. It has been wildly supported by modern browsers, but for
those did not support it, you need a compiler for your project to convert it
into ES5.

## Declear variables

1. `let`
  1. `let` will throw an error if you try to assign a variable twice.
  2. The variiables created by `let` are limmited in the scopes (block, statement, or expression) where they were assigned.
2. `const`
  1. The same features as `let`;
  2. The variables created by `const` are **read-only**.
  3. The `array` assigned by `const` are still mutable. Only the `identifiers` are protected.
3. Function `Object.freeze()` will freeze the object, even the values in an `array`.
