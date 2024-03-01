document.getElementById('postButton').addEventListener('click', function () {
    const createElement = document.createElement('p');
    createElement.innerText = document.getElementById('inputedText').value;
    document.getElementById('all-comments').appendChild(createElement);
    
    document.getElementById('inputedText').value = '';
})