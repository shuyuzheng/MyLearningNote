# Basic JavaScript

## comment

* `//` for one line 
* `/* .... */` for multiple lines.

## data type

* `undefined`: a variable **without** value.
* `null`
* `boolean`
* `string`: 
  * define by `"` or `'`
  * immutable: Your can not change the substring with `string[2] = "n"`
  * `<string>.length`: the length of string.
  * `[]`: use _offset_ to extract element from string, like python.
  
* `symbol`
* `number`
* `object`
* `array`:
  * define by `[]`
  * separate items with `,`
  * different type of variables is available, like `array` in python and `list` in R
  * access items with `[]`
  * mutable
  * `.push()`: append items to end of array. `<array>.push(<item>)`
  * `.pop()`: throw the **last** item from array. `<array>.pop()`
  * `.shift()`: throw the **first** item from array. `<array>.shift()`
  * `.unshift()`: add item to the beginning of array. `<array>.unshift(<item>)`

## variable

1. Build a variable (without assign values): `var variable_name;` or
(with value): `var variable_name = value;`

* `variable_name` can be made by: _numbers_, _letters_, `$` and `_`.
* It can **not** contain: space.
* It can **not** start with a number.

2. Assignment: `variable_name = value;` (`variable_name` should be already existed one)

3. Style of variable name: 
    * It's case **sensitive**
    * It's best to use _camelStyle_: like `variableName`

## Operation for number

* Regular symbols: `+`, `-`, `*`, `/`
* Add or subtract `1` to the variable: `++` or `--` (e.g. `i++;` equal to `i = i + 1`)
* Add, subtract, multiply or divide random number from a variable: `+=`, `-=`, `*=` or `/=` (e.g. `i += 5` equal to `i = i + 5`)
* Remainder: `%`
* Special characters:
    * `\\`: backslash
    * `\n`: newline
    * `\r`: carriage return
    * `\t`: tab
    * `\b`: backspace
    * `\f`: form feed

## Functions

### Define and call
* Define:

```JavaScript
function functionName(param1, param2) {
    operation(param1, param2);
}
```

* Call function:

```JavaScript
functionName(P1, P2);
```
### Scope

It like the _evironment_ in R.

**global scope**: the environment _outside_ functions.

**local scope**: the environment _inside_ functions.

You can define **global variable** inside **function** with `<variableName> = <value>` without `var`.


## Build-in functions

`console.log`: print somethin in dev console.

