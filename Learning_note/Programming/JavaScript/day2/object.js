// Object in JavaScript is defined by 'function'

function Person(name, age)
{
  this.nimi=name; // this is a default object indicates this object
  this.ika=age;
  this.kuvaus="";

//  this.introduce=function(){
//    console.log("Moi! Olen " + this.nimi);
//  }
}

Person.prototype.introduce=function(){ // 'prototype put the introduce function to a shared space for all person classes
    console.log("Moi! Olen " + this.nimi);
  }

var Tiki = new Person(); // create a class
var Alina = new Person("Alina", 21);
Tiki.nimi = "Tiki";
Tiki.ika = 46;
Tiki.kuvaus = "Panne mies linttu";

Tiki.introduce();
Alina.introduce();

Person.prototype.introduce=undefind// Delete the function introduce from class.
