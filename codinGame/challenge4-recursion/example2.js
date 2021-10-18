const getFactorial = number => {
    if (number === 0) {
        console.log(number);
        return 0;
    }
    
    console.log(number);
    return number * getFactorial(number - 1);
}

getFactorial(3);