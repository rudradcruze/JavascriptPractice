function maximum(number) {
    let max = number[0];

    for (let i = 1; i < number.length; i++) {
        if(max < number[i])
            max = number[i];
    }
    
    return max;
}

const data = [10,60,2,82,14,96,444];
const result = maximum(data);

console.log(result);