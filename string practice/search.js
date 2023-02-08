const string = "Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomake vulte pari ni. Sada sada kala kala rong jomeche sada kala.";


// Includes
// console.log(string.includes('Bosonto'));
const searchWord = 'bosonto';
if(string.toLowerCase().includes(searchWord.toLowerCase())) {
    console.log(searchWord, "found in the string");
}
else {
    console.log(searchWord, "not found in the string");
}


// Index of
console.log(string.indexOf('kala'));
console.log(string.indexOf('Kala'));


// Starts with
console.log(string.startsWith('Tumi'));
console.log(string.startsWith('tumi'));

// Ends with
console.log(string.endsWith('kala.'));
console.log(string.endsWith('kala'));