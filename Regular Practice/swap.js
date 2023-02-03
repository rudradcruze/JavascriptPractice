let first = 10;
let second = 20;

console.log(first, second);

// Swap approach 1
let temp = first;
first = second;
second = temp;

console.log(first, second);

// Swap Approach 2
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
