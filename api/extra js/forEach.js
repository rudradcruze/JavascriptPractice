const products = [
    { id: 2001, name: 'mobile', price: 80000 },
    { id: 2002, name: 'laptop', price: 800000 },
    { id: 2001, name: 'watch', price: 35000 },
    { id: 2001, name: 'tablet', price: 23000 }
]

products.forEach(product => console.log(product.id));
products.forEach(product => console.log(product.name));
products.forEach(product => console.log(product.price));