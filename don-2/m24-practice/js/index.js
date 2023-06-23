console.log("Test");
console.log(document);

const student = {
    name: 'Rudra',
    Id: 11,
    study: function(time) {
        console.log(time, 'Study kortese')
    }
}

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);

for (const li of liCollection) {
    console.log(li.innerText);
}

const fixedId = document.getElementById('technology');
fixedId.innerHTML = "Technology changed by id";

const places = document.getElementsByClassName('important');
console.log(places);


for (const classes of places) {
    console.log(classes.innerText);
}