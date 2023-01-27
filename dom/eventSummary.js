function handelOnClick(){
    document.getElementById('handelarText').innerText = "Hello i now i am able to change the text";
}

// Option 2
document.getElementById('eventLin').addEventListener('click', function () { 
    document.getElementById('handelarText').innerText = "Hello i now i am able to change the text by event lisener";
 })