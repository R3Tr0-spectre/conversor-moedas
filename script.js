let currentInput = "";  
let previousInput = ""; 
let operator = "";      

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === "") return; 
    if (previousInput !== "") { 
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Erro";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    
    if (result === 666) {
        currentInput = "Hello, World!!";
    } else if (result === 404) {
        currentInput = "Calcula vc >:{";
    } else {
        currentInput = result.toString();
    }
    
    operator = "";
    previousInput = "";
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
