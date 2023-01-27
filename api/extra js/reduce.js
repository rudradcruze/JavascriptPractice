const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sum, current) => {
    return sum + current;
}, 0);
console.log(sum);
