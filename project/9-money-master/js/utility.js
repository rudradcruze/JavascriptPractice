function getInputValueById (elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.value);
    element.value = '';
    if (isNaN(elementValue))
        return 0;
    else
        return elementValue;
}

function getTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    if (isNaN(elementValue))
        return 0;
    else
        return elementValue;
}

function setValue (elementId, amount) { 
    const element = document.getElementById(elementId);
    element.innerText = amount;
}