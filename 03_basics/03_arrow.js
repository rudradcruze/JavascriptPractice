const user = {
    username: "rudra",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function joss(){
//     let username = "rudra"
//     console.log(this.username);
// }

// joss()

// const joss = function () {
//     let username = "rudra"
//     console.log(this.username);
// }

const joss = () => {
    let username = "rudra";
    console.log(this);
};

// joss()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "rudra" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
