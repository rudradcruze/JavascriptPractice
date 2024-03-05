const button = document.getElementById('button');
const text = document.getElementById('text');
const inputField = document.getElementById('inputField');

inputField.addEventListener('keyup', function (event) {
    if (event.target.value === 'delete') {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', true);
    }
})

button.addEventListener('click', function(){
    text.style.display = 'none';
    inputField.value = '';
})