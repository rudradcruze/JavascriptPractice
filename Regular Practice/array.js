const country = "Bangladesh";
const age = 21;
const friends = [10,20,30,40];
const product = {
    id: 1001,
    name: 'Laptop',
    price: 60000,
    color: 'Dark Gray'
}
function add (number1, number2) {
    return number1 + number2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof friends);
console.log(typeof product);
console.log(typeof add);
console.log(Array.isArray(friends));

// Concat array
const newFriends = [25,12,30,56];
const allFriends = friends.concat(newFriends);

console.log(allFriends);