const products = [
    { id: 2001, name: 'mobile', price: 80000 },
    { id: 2002, name: 'laptop', price: 800000 },
    { id: 2001, name: 'watch', price: 35000 },
    { id: 2001, name: 'tablet', price: 23000 }
]

const moreBiger = products.find(product => product.price >= 80000);
console.log(moreBiger);