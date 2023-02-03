const string = "Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomake vulte pari ni. Sada sada kala kala rong jomeche sada kala.";

// Split
const splitSpace = string.split(" ");
console.log(splitSpace);
const splitDot = string.split(".");
console.log(splitDot);
const splitChar = string.split('');
console.log(splitChar);

// Slice
const slice = string.slice(2, 30);
console.log(slice);
const slice2 = string.substring(2, 30);
console.log(slice2);

// join

const slisedString = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomake vulte pari ni',
    'Sada sada kala kala rong jomeche sada kala'
]

const joiningDot = slisedString.join(". ");
console.log(joiningDot);
const joiningComa = slisedString.join(",");
console.log(joiningComa);

const trimAbleString = "    Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomake vulte pari ni. Sada sada kala kala rong jomeche sada kala.    "

console.log(trimAbleString);
const stringTrim = trimAbleString.trim();
console.log(stringTrim);