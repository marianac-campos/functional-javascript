/* 
 ---  F I L T E R  ---

function isEven(x){
  return x % 2 === 0;
};

const numbers = [12, 324, 76, 93, 5, 45, 4234];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
*/

/*
 ---  L A M B D A  ---

const isEven = (x) => x % 2 === 0;

const numbers = [12,324,213,4,2,3,45,4234];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);
*/

/*
 ---  M A P  ---

const numbers = [1, 3, 4, 5, 6, 12, 20, 34];
const squares = numbers.map((x) => Math.pow(x, 2));

console.log(squares);
*/

/*
 ---  R E D U C E  ---

const numbers = [2, 3, 4, 5];
const product = numbers.reduce((acc, x) => acc * x, 1);

console.log(product);

================================

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