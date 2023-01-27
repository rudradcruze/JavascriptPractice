document.getElementById('updateText').addEventListener('click', function (){
    document.getElementById('textChagne').innerText = document.getElementById('inputField').value;
    document.getElementById('inputField').value = '';
})