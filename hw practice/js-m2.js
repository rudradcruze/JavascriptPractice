function makeAverageArray(data) {
    let sum = 0;
    for(let i=0; i<data.length; i++) {
        sum += data[i];
    }
    return sum/data.length;
}

let data = [10, 10, 10, 10, 10];

const result = makeAverageArray(data);
console.log(result);

function evenOddCheck(num1) {
    if (num1 % 2 == 0)
        console.log("The number", num1, "is even.");
    else
        console.log("The number", num1, "is odd.");
}

console.log(evenOddCheck(232));