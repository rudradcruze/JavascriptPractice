const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');

const heading = document.createElement('h1');
heading.innerText = "Accessories";

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Keyboard";
ul.appendChild(li1);

const li4 = document.createElement('li');
li4.innerText = "Mouse";
ul.appendChild(li4);

const li3 = document.createElement('li');
li3.innerText = "Headset";
ul.appendChild(li3);


section.appendChild(heading);
section.appendChild(ul);

mainContainer.appendChild(section);

// set method 2
const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
    <h1>This is my dress section</h1>
    <ul>
        <li>Pant</li>
        <li>Shirt</li>
        <li>T-Shirt</li>
    </ul>   
`

mainContainer.appendChild(sectionDress);