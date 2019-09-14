// 6 operators in JavaScript
// ==(same as type), !=, ===(same as value), !==, >, >=, <, <=
var x = 5;
var y = 11;
if(x == y)
{
  console.log("True");
}
else
{
  console.log("False");
}
// 3 logical operators
// &&, ||, !! 

// Math operator
// (), % modulo, /, *, +, -

var result = (212 - 32) * 5 / 9
console.log(result)

var somthing = 0;
console.log(somthing++);// add 1 to something after this line
console.log(++somthing);// add 1 to something before this line
console.log(somthing+=3);// immediately something = something + 3

var selection = 30;

switch(selection)
{
  case 1: console.log("Hello");
  break;
  case 2: console.log("Namaste");
  break;
  case 3: console.log("Privet");
  break;
  case 4: console.log("Morias");
  break;
  case 3: console.log("Ciao");
  break;
  default: console.log("WTF");
}
