//filter is a method of arrays - return a boolean
// returns a new array with only the elements for which return true 

var carrinho = [
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
];

function primeItems(carrinho){
  items = carrinho.type;
  return items === 'prime';
};

const isPrime = carrinho.filter(primeItems);
console.log(isPrime);

//LAMBDA FUNCTION
// const primeItems = (carrinho) => {items = carrinho.type; items === 'prime';} ?

/*
function isPrime(x){
x = carrinho.type;

if(x === 'prime'){
  return true;
} else {
  return false;
};
};
*/

/*
function primeItems(carrinho){
carrinho.filter(isPrime());
};
*/