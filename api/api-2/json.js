const shop = {
    name: 'FRDC Shop',
    address: {
        street: '108/b Green Road',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    product: ['laptop', 'mobile', 'watch', 'camera', 'monitor', 'keyboard'],
    revenue: 50000,
    isOpen: true,
    isOld: false
}

const shopString = JSON.stringify(shop);
const shopOld = JSON.parse(shopString);

console.log(shopString);
console.log(shopOld);