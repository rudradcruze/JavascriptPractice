const history = document.querySelector(".history-component");
const inputBox = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons");
const speical = ["%", "*", "/", "+", "-"];

let output = "";
let bracket = 0;
let bracketChecked = false;
let elementCheck = false;
let fontSize = 25;

function evaluateExpression(expression) {
    const sanitizedExpression = expression.replace("%", "/100");
    return new Function(`return ${sanitizedExpression}`)();
}

const checkSpecial = (value) => speical.includes(value);

const handleAC = () => (output = "");

const handleDEL = () => (output = output.slice(0, -1));

function handelBracket(value) {
    if (bracket > 0 && elementCheck == true) {
        output += ")";
        bracket--;
        bracketChecked = true;
    } else {
        if (elementCheck == true && !checkSpecial(value)) {
            output += "*(";
            bracket++;
            elementCheck = false;
            bracketChecked = false;
        } else {
            output += "(";
            bracket++;
        }
    }
}

function handelValue(value) {
    if (bracketChecked && !checkSpecial(value)) {
        output += `*${value}`;
    } else {
        output += value;
        elementCheck = true;
    }
    bracketChecked = false;
}

function updateFontSize() {
    const currentSize = inputBox.value.length;
    if (currentSize < 17) {
        fontSize = 25;
    } else if (currentSize < 21) {
        fontSize = 20;
    } else if (currentSize < 28) {
        fontSize = 16;
    } else {
        fontSize = 10;
    }
    inputBox.style.fontSize = `${fontSize}px`;
}

function calculation(value) {
    if (value === "=" && output !== "") {
        output = evaluateExpression(output);
        bracket = 0;
        bracketChecked = false;
        elementCheck = false;
        fontSize = 25;
    } else if (value === "AC") {
        handleAC();
    } else if (value === "DEL") {
        handleDEL();
    } else {
        if (output === "" && checkSpecial(value)) return;
        if (value === "()") {
            handelBracket(value);
        } else {
            handelValue(value);
        }
    }
    inputBox.value = output;
    updateFontSize();
}

function popLastValue() {
    output = output.slice(0, -1);
}

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        calculation(event.target.dataset.value);
    });
});
