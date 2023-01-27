const user = {
    id: 50001,
    name: 'Francis Rudra D Cruze',
    address: {
        street: {
            first: '108/b Green Road',
            second: 'Second Floor',
            third: 'Left Side',
        },
        postalCode: 1205,
        postOffice: 'Tejoan',
        city: 'Dhaka',
        Country: 'Bangladesh',
    }
}

const userFloor = user.address?.street?.second;

console.log(userFloor)