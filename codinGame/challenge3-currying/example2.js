function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax);
    }
}

const mfinalPrice = finalPrice(0.0875);

console.log(mfinalPrice(25.1));
console.log(mfinalPrice(78.99));
console.log(mfinalPrice(172.67));