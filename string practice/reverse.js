function reverse(string) {
    let reverseString = "";

    for (let i = string.length - 1; i >= 0; i--)
        reverseString += string[i];

    return reverseString;
}

const string = "My name is Francis Rudra D Cruze";
const reverseResult = reverse(string);
const correctResult = reverse(reverseResult);

console.log(reverseResult);
console.log(correctResult);