const number = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 10];

const doubleInt = num => num * 2;
const numberDouble1 = number.map(doubleInt);
const numberDouble2 = number2.map(num => num * 2);

console.log(numberDouble1);
console.log(numberDouble2);