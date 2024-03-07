const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const joss = {
    name: "ginger joss",
    price: 250,
    isAvailable: true,

    orderjoss: function () {
        console.log("joss nhi bni");
    },
};

console.log(Object.getOwnPropertyDescriptor(joss, "name"));

Object.defineProperty(joss, "name", {
    //writable: false,
    enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(joss, "name"));

for (let [key, value] of Object.entries(joss)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
