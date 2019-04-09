# Basic JavaScript

## comment

* `//` for one line 
* `/* .... */` for multiple lines.

## data type

* `undefined`: a variable **without** value.
* `null`
* `boolean`: `true` or `false`.
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

When local variable and global variable have the same name, then the _local variable_ goes first.

* Deliver values to global scope

  1. JavaScript defaultly return the result of last line of command inside the function.
  2. `return <results/expression>;`: specify the results returned to global scope.
  3. When a function reach `return` statement, it will break and return the value.


## Build-in functions

* `console.log(<variable>)`: print somethin in dev console.
* `typeof <variable>`: check the data type of a variable.

## Work flow control

### If syntax

```{JavaScript}
for (<con1>) {
    <operation for con1 is true>;
} else if (con2) {
    <operation for con1 is false but con2 is true>;
} else {
    <operation for con1 and con2 are both false>;
}
```

When compare two **different data type** by symbol `==` or `!=`, JavaScript will **coercion** the data type to make them comparable anyway. For example `1 == '1'` will return `true` and `1 != '1'` returns `false`.

**Strict equality symbol** and **Strict inequality symbol**(`===` and `!==`): they will consider the data type when comparing two variables. For example, `1 === '1'` will return `false` and `1 !== '1'` will return `true`.

Other operators for comparson:  
* `<`, `>`, `<=`, `>=`
* `&&`: and
* `||`: or

### switch syntax

```{JavaScript}
switch(<input>) {
    case <value1>:
        <statement1>;
        break;
    case <value2>:
        <statement2>;
        break;
    default:
        <defaultStatement>;
        break;
}
```

Multi cases share same statement

```{JavaScript}
switch(<input>) {
    case <value1>:
    case <value2>:
    case <value3>:
        <statement>;
        break;
}
```


