// Immediately Invoked Function Expressions (IIFE)

(function joss() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("rudra");
