let countdown = (num) => {
    if (num === 0) { 
        console.log("BOOM");
    } else {
        console.log(num);
        countdown(num-1);
    }
}

countdown(5);