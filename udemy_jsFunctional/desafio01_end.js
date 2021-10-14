// A N S W E R 

function range(x, y, z = 1) {
    const x2 = y === undefined ? 1 : x;
    const y2 = y === undefined ? x : y;
    const z2 = x2 <= y2 ? Math.abs(z) : -Math.abs(z); 

    const array = [];

    for(let contador = x2; 
            x2 <= y2 ? contador <= y2 : contador >= y2;
                contador+=z2) {

        array.push(contador);
    }

    return array;
}

// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5));

// range(6, 11) -> [6, 7, 8, 9, 10, 11]
console.log(range(6, 11));

// range(10, 19, 2) -> [10, 12, 14, 16, 18]
console.log(range(10, 19, 2));

// range(6, 2) -> [6, 5, 4, 3, 2]
console.log(range(6, 2));

// range(8, -3, 4) -> [8, 4, 0]
console.log(range(8, -3, 4));