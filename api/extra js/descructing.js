const fish = {
    name: 'Rupali',
    phone: '01870179066',
    price: 4000,
    color: 'Silver',
    address: 'Chadpur'
}

const {price} = fish;
const {color} = fish;
console.log(price);
console.log(color);


const {age, person} = {
    name: 'Francis Rudra D Cruze',
    age: 19,
    dob: '16-10-2002',
    address: 'Nawabganj, Dhaka, Bangladesh'
}

console.log(age);

// Array destructuring
const [first, second, third] = [10, 20, 30, 55, 60];
console.log(first, second, third);

const nayok = ['rudra', 'anonto', 'dipkol'];
const [nayok1, django] = nayok;
console.log(nayok1, django);
console.log(django);