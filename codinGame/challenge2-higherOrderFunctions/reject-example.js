const example = require('underscore');

const numbers = [1, 6, 7, 33, 89, 104, 264];

const impar = example.reject(numbers, (x) => {
    return x % 2 === 0;
});

console.log(impar);