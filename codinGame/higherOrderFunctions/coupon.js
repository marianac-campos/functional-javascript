var carrinho = [
    {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
    {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
    {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
    {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

function applyCoupon(carrinho){
    if(carrinho.category == 'tech'){
        return carrinho.price-(carrinho.price*0.2);
    }else{
        return `desconto N/A - ${carrinho.price}`;
    }
}

const desconto = carrinho.map(applyCoupon);

console.log(desconto);