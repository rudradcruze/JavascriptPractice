// let myName = "rudra     "
// let mychannel = "joss     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

Object.prototype.rudra = function () {
    console.log(`rudra is present in all objects`);
};

Array.prototype.heyrudra = function () {
    console.log(`rudra says hello`);
};

// heroPower.rudra()
// myHeros.rudra()
// myHeros.heyrudra()
// heroPower.heyrudra()

// inheritance

const User = {
    name: "joss",
    email: "joss@google.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"rudra".trueLength();
"iceTea".trueLength();
