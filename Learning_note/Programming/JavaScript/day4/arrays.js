var list = ['Apples', 'Bananas', 'Pears', 'Grape', 'Durians']

// var list = new Array(1, 2, 3, 4, 5);
//
//list[0] = 'Apple';
// 
// for (var i = 0; i < list.length; i++)
// {
//   console.log(list[i]);
// }
// 
// // Since ES5 (2015)
// for (var item of list)
// {
//   console.log(item.toUpperCase());
// }
// 
list.push('Mango', 'Rambutans', 'papaya');
list.pop();
list.splice(4, 1) // .splice(startAtIndex, NumberOfItemsBeenRemoved)
list.splice(1, 0, "Ananas", "Mandriini"); // add two elements after first 
list.splice(3, 3, "something"); //remove 3 items from item at index 3, add "something" at index 3
// Since ES6 (2016)
list.forEach(function(item){
  console.log(item);
});


