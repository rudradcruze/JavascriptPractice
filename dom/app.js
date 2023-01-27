const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 final

document.getElementById('make-orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
})