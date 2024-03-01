const someLi = document.querySelectorAll('.lists li');

for (const li of someLi) {
    console.log(li.innerText);
}

const singleOne = document.querySelector('.lists li');
console.log(singleOne);


const title = document.getElementById('technology');

console.log(title.getAttribute('class'));

console.log(title.classList);

title.classList.remove('blue-bg');
title.classList.add('border-test');

console.log(title.classList);

title.style.textAlign="center";
title.setAttribute('title', "Technology title set by javaScript");

const innterHtmlTest = document.getElementsByClassName('lists')[0].innerText;
console.log(innterHtmlTest);
// innterHtmlTest.innerHTML = "<h2>I am grateful</h2>";
// console.log(innterHtmlTest.innerText);