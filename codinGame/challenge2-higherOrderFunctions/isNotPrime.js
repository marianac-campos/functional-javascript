const _ = require('underscore'); 
// const isPrime = require('./isPrime.js');

const cart = [
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

function isPrime(item){
  return item.type === 'prime';
}

function notPrimeItems(cart){
  return _.reject(cart, isPrime);
}

console.log(notPrimeItems(cart));