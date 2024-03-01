const liContainer = document.getElementById('li-container');

document.getElementById('add-items').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = "Add item via button";
    li.classList.add('items');
    liContainer.appendChild(li);
})

liContainer.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})