const bookDetails = {
    id: 5001,
    book: "How to program",
    author: 'Francis Rudra D Cruze',
    publications: 'Pagla Publications',
    stock: 100
}

// console.log(bookDetails);
// console.log(bookDetails.id);
// console.log(bookDetails['id']);
// console.log(Object.keys(bookDetails));
// console.log(Object.values(bookDetails));

// const propertyName = 'book';
// console.log(propertyName, bookDetails[propertyName]);

const keys = Object.keys(bookDetails);
console.log(keys);

const values = Object.values(bookDetails);
console.log(values);

console.log("Keys & value are: ");

// Using simple for loop
for (let i=0; i<keys.length; i++)
{
    console.log(keys[i], bookDetails[keys[i]]);
}


// Using for in loop
console.log("\nUsing for in loop: ")
for (const key in bookDetails) {
    console.log(key, bookDetails[key]);
}

const arraying = [12,13,15,16,42,25];
let sum = 0;
for (let i=0; i<arraying.length; i++) {
    sum += arraying[i];
}

console.log(sum);