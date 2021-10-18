const exercise = require('underscore'); 
const isPrime = require('./isPrime.js');

const cart=[
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

/*
function notPrimeItems(cart){
  const isPrime = cart.type;
  if(isPrime === 'regular') {
    return cart.type;
  } else {
    return cart.type;
  }
}
*/

const notPrime = exercise.reject(cart, (x) => x.type === 'prime');

console.log(notPrime);