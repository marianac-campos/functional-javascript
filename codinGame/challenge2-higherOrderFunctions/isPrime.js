//filter is a method of arrays - return a boolean
// returns a new array with only the elements for which return true 

var cart = [
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

function primeItems(cart){
  
}

function isPrime(item){
  if(item === 'prime') {
    return true;
  } else {
    return false;
  }
}

const prime = cart.filter(primeItems);
console.log(prime);