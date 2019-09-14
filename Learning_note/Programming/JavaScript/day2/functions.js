// The default value for variable works only for ES5
function doSomething(x = "Mary", y)
{
  console.log('Doing something with ' + x + y);
  console.log(x + y + 'Doing something with ');
}

// doSomething("Hi", "Tom");
// doSomething("dinner.")
// doSomething(5, 4)

function add(x, y)
{
  var z = x + y;
  return z; // If you don't put return to JavaScript, it will not return anything. It's different from Python. You can only return one object. Once return is met, the function ends.

}

var result = add(5, 6)
console.log(result)

//anonymous function
//

var fx = function(){
  console.log('Anonymous Functon');
}

fx();

// embedded function

function funky(a)
{
  return function(b) {
    return a + b
  }
}

var doThisFirst = funky(20); // it replace a as 20 get function(b){ return 20 + b }

console.log doThisFirst(5);
