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

## Function related syntax

1. Simplify function definition using `=>`: simplify some small function definition. It looks like the lambda function in Python??

Omit function name:

```
const myFunc = (<para>) => {
  <operation>;
  return <object>;
}
```

Omit `return` statement:

```
const myFunc = (<para>) => <returned_object>
```

**Note**: `const` is required for declearing object.

Combine with higher order functions, like `map()`, `filter()`, `reduce()`

```
<Object>.filter((<para>) => <conditions>)
```

2. Set default value to arguments, like R.

```
function myFunc(arg = <value>) {
  <operation>
}
```

3. `...args`(rest operator) means multiple other parameters.

The arguments will be stored in an **array**

```
function myFunc(...args) {
  <operation>
}
```

## Array operator

1. spread operator `...arr`: Spread (unpack) array so that functions can be used to each
   elements in the array and it can be modified in-place.

2. Destructuring assignment:
Assign the value of certain element in array to a new variable with specify the `key`.

```
const {<key_in_array> : <newvariable>} = <array>
const {<key_1_layer> : { <key_2_layer> : <newvariable>}} = <array>
```

Example:

```
var voxel = {x: 3.6, y: 7.4, z: 6.54};
const {x : a, y : b, z : c} = voxel
```

It is equevelant to

```
var a = voxel.x
var b = voxel.y
var c = voxel.z
```


