var hours = prompt("Enter number of hours worked:")

var numHours = parseFloat(hours);

//Calculate and display gross, tax, and nett pay. based on:
//basic pay = 15/hours
//overtime pay rate = 1.5 X
//tax Rate = 24 %
//over time is calculated only after 40 hours

const basic = 15;
const otRate = 1.5;
const taxRate = 0.24;
const regHours = 40;
var gross, tax, nett

if(hours <= regHours)
{
  var gross = basic * hours;
}
else
{
  var gross = regHours * basic + (numHours - regHours) * otRate * basic;
}
  var tax = gross * taxRate;
  var nett = gross - tax;

console.log("The gross is " + gross + ". The tax is " + tax + ". The net pay is " + nett + ".")
