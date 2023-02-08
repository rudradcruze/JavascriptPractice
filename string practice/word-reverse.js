function wordReverse(sentence) {
    const split = sentence.split(" ");
    const splitReverse = [];

    for (let i = split.length - 1; i >= 0; i--)
        splitReverse.push(split[i]);

    return splitReverse.join(" ");
}

const string = "My name is Francis Rudra D Cruze";
const result = wordReverse(string);
console.log(result);