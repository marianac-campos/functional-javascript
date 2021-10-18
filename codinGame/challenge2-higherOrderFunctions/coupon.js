var cart = [
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  ]
  
  function applyCoupon(cart) {
    return cart.map(function (el) {
    if (el.category == "tech") {
    return el.price * 0.8;
    }
    return el.price;
    })
  }
  
  const desconto = cart
    .map(applyCoupon)
    .map(Math.round);
  
  console.log(desconto);