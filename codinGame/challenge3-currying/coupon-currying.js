const cart=[
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  ]

const applyCoupon = category => discount => item => { 
  if(category === "food") {  
    item.price -= item.price*discount;
    return item;
  }
  return item;
}

const item = {
  "name": "Biscuits",
  "type": "regular",
  "category": "food",
  "price": 2.0
}

console.log(applyCoupon("food")(0.1)(item));
  
applyCoupon("food")(0.1)(item).price === 1.8