// Reject creates an array with all the elements but those that satisfy the condition

const _ = require('underscore'); //library underscore.js
const isPrime = require('./isPrime.js');

var cart=[
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

function notPrimeItems(cart){
  const notPrime = cart.type;
  return cart === isPrime;
}

_.reject(cart, notPrimeItems)