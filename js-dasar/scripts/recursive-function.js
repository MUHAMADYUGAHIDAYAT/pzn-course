function factorial(value){
    let result = 1;
    for (let i = 1; i <= value; i++){
        result *= i;
    }
    return result;
}

console.info(factorial(7));
console.info(1 * 2 * 3 * 4 * 5 * 6 * 7);

function factorialRecrusive(value){
    if (value === 1){
        return 1;
    } else {
        return value * factorialRecrusive(value - 1);
    }
}
console.log(factorialRecrusive(7))