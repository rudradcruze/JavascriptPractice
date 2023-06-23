const container = document.getElementById('hardware');
// console.log(container);
// console.log(container.childNodes);
// console.log(container.childNodes[2]);
console.log(container.childNodes[3].childNodes[2].nextSibling.innerText);

const songs = document.querySelector('#songs ul');

const li = document.createElement('li');
li.innerText = "Brand new new Line";

const li2 = document.createElement('li');
li2.innerText = "Another brand new place";

songs.appendChild(li);
songs.appendChild(li2);

console.log(songs.parentNode.parentNode.parentNode);

// console.log(li);