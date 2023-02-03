function fibonacchi (number) { 
    let value = 1;
    for(let i=1; i<=number; i++)
        value *= i;

    return value;
}

const result = fibonacchi(9);
console.log(result);