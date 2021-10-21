const cart = [
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
  ]
  
  function applyCoupon(cart){ 
    return cart.map( (item) => {
      if(item.category === 'tech') {
        item.price -= (item.price*0.2);
        return item;
      } else {
        return item;
      }
    });
 }

 console.log(applyCoupon(cart));