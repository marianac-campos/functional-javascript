/* --- F O R E A C H  ---

> method calls a function (a callback function) once for each array element

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

> the value 'index' and 'array' can be hidden in function

  function myFunction(value) {
    txt += value + "<br>";
  }

=== syntax: array.forEach(myFunction); ===

*/

/* ---  M A P  --- 

> method creates a new array by performing a function on each array element

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);

> the value 'index' and 'array' can be hidden in function

  function myFunction(value) {
    return value * 2;
  }

=== syntax: array.map(myFunction); ===
*/

/* ---  F I L T E R  ---

> method creates a new array with array elements that passes a test 

const numbers = [12, 324, 76, 93, 5, 45, 4234];
const evenNumbers = numbers.filter(isEven);

function isEven(value, index, array){
  return x % 2 === 0;
}

console.log(evenNumbers);

> 'index' and 'array' parameters can be omitted in function

  function isEven(value){
    return x % 2 === 0;
  }

=== syntax: array.filter(myFunction); ===
*/

/* ---  R E D U C E  ---

> method runs a function on each array element to produce (reduce it to) a single value
> method works from left-to-right in the array
> if you want to start from right to left use 'reduceRight()'

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum); //return 99

> the 'reduce()' method can accept an initial value: 

  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduceRight(myFunction, 100);

  function myFunction(total, value) {
    return total + value;
  }

  console.log(sum); //return 199

> 'index' and 'array' parameters can be omitted in function

  function myFunction(total, value) {
    return total + value;
  }

=== syntax: array.reduce(myFunction, total); ===

> 'total' is optional. Here would be the initial value.

===========  another examples  ============

> filtering only even numbers

const isEven = (x) => {
  return x % 2 === 0;
};

const numbers = [12,324,213,4,2,3,45,4234];
const callback = (acc, x) => {
  if(isEven(x)) {
    acc.push(x)
  };

  return acc;
};

const evenNumbers = numbers.reduce(callback, []);
console.log(evenNumbers);

===============================

> implementing map with reduce

function map(arr, callback){
  return arr.reduce((acc, x) => {
    acc.push(callback(x));
    return acc;
  }, []);
};

const squares = map([1, 2, 3, 4, 5], (x) => Math.pow(x, 2));
console.log(squares);
*/

/* ---  E V E R Y  ---

> method check if all array values pass a test

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(allOver18); //return false

> the value 'index' and 'array' can be hidden in function

  function myFunction(value) {
    return value > 18;
  }

=== syntax: array.every(myFunction); ===
*/

/* --- I N D E X O F  --- 

> method searches an array for an element value and returns its position

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

console.log(position);

=== syntax: array.indexOf(item, start); ===

> 'item' is required. The item to search for.
> 'start' is optional. Where to start the search.
*/

/* ---  L A M B D A  ---

const isEven = (x) => x % 2 === 0;

const numbers = [12,324,213,4,2,3,45,4234];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
*/