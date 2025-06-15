let expression = "";
let displayValue = "";
const MaxDigit = 18;

function showNumber(num) {
    if (expression.length < MaxDigit) {
        expression += num;
        displayValue += num;
        updateDisplay();
    }
}

function showSymbol(symbol) {
    if (expression.length < MaxDigit) {
        if (symbol === '%') {
            expression += "/100";
            displayValue += '%'
        } 
        else if (symbol === '(') {
            let lastChar = expression.slice(-1);
            if (/\d|\)/.test(lastChar)) {
                expression += '*(';
                displayValue += '(';
            }
            else {
                expression += '(';
             displayValue += '(';
            }
        }
        else {
            expression += symbol;
            displayValue += symbol;
        }
        updateDisplay();
    } 
    
}

function showSign(oparator) {
    if (expression.length < MaxDigit) {
        if (oparator === 'x') {
            expression += '*';
            displayValue +='x';
        }
        else if (oparator === '÷') {
            expression += '/';
            displayValue += '÷';
        }
        else {
            expression += oparator;
         displayValue += oparator;
        }
        updateDisplay();
    }
    
}

function showTotal() {
    try {
        let result = eval(expression);
        expression = result.toString();
        displayValue = result.toString();
        updateDisplay();
    }
    catch (e) {
        expression = "Error";
        displayValue = "Error";
        updateDisplay();
    }
}

function erasenumber() {
    expression = "";
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementsByClassName("box")[0].textContent = displayValue;
}