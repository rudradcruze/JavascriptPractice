const number = [20, 10, 80, 90, 350, 550, 100, 300];
const half = number.map(x => x / 2);
const third = number.map(x => x / 3);

console.log(half);
console.log(third);

const friends = ['Tom Cruise', 'Francis Rudra', 'Argho lal', 'Ross Sos'];
const firstLetter = friends.map(friend => friend[0]);
const friendLength = friends.map(friend => friend.length);

console.log(firstLetter);
console.log(firstLetter);

const products = [
    {id: 2001, name: 'mobile', price: 80000},
    {id: 2002, name: 'laptop', price: 800000},
    {id: 2001, name: 'watch', price: 35000},
    {id: 2001, name: 'tablet', price: 23000}
]

const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);

console.log(productName);
console.log(productPrice);