//create a range function

// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

// =================================================== //

// range(5) -> [1, 2, 3, 4, 5] //

function exercicio01(x, y, z) {
    const array = [];

    for(let contador = 1; contador <= x; contador++){
        array.push(contador);
    }

    return array;
}

console.log(exercicio01(5));

// range(6, 11) -> [6, 7, 8, 9, 10, 11] //

function exercicio02(x, y, z) {
    const array = [];

    for(let contador = x; contador <= y; contador++){
        array.push(contador);
    }

    return array;
}

console.log(exercicio02(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18] //

function exercicio03(x, y, z) {
    const array = [];

    for(let contador = x; contador <= y; contador+=z){
        array.push(contador);
    }

    return array;
}

console.log(exercicio03(10, 19, 2));

// range(6, 2) -> [6, 5, 4, 3, 2] //

function exercicio04(x, y) {
    const array = [];
    
    if(x < y) {
        for(let contador = x; contador <= y; contador++) {
            array.push(contador);
        }    
    } else {
        for(let contador = x; contador >= y; contador--) {
            array.push(contador);
        }
    }
    
    return array;
}

console.log(exercicio04(6, 2));

// range(8, -3, 4) -> [8, 4, 0] //

function exercicio05(x, y, z) {
    const array = [];
    
    if(x < y) {
        for(let contador = x; contador <= y; contador+=z) {
            array.push(contador);
        }    
    } else {
        for(let contador = x; contador >= y; contador-=z) {
            array.push(contador);
        }
    }
    
    return array;
}

console.log(exercicio05(8, -3, 4));