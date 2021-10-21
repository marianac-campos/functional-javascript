const cart = [
    { name:"Biscuits", type:"regular", category:"food", price: 2.0 },
    { name:"Monitor", type:"prime", category:"tech", price: 119.98 },
    { name:"Mouse", type:"prime", category:"tech", price: 25.50 },
    { name:"dress", type:"regular", category:"clothes", price: 49.90 }
]

function totalCost(cart){
    return cart.reduce(function(total, item) {
        return total + item.price;
    }, 0);
}

console.log(totalCost(cart));