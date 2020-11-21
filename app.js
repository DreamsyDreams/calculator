const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const allClearButton = document.querySelector('.all-clear');
const deleteButton = document.querySelector('.delete');
const equalsButton = document.querySelector('.equals');
const previousOutputText = document.querySelector('.previous-output');
const currentOutputText = document.querySelector('.current-output');

class Calculator {
    constructor(previousOutputText, currentOutputText) {
        this.previousOutputText = previousOutputText;
        this.currentOutputText = currentOutputText;
        this.clear();
    }

    clear() {
        this.currentOutput = '0';
        this.previousOutput = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOutput = this.currentOutput.toString().slice(0, -1);
    }

    addNumber(number) {
        if (number === '.' && this.currentOutput.includes('.')) return;
        this.currentOutput = this.currentOutput.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOutput === '') return;
        if (this.previousOutput !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOutput = this.currentOutput;
        this.currentOutput = '0';
    }

    compute() {
        let computation;
        const previous = parseFloat(this.previousOutput);
        const current = parseFloat(this.currentOutput);
        if (isNaN(previous) || isNaN(current)) return;
        switch (this.operation) {
            case '/':
                computation = previous / current;
                break;
            case '*':
                computation = previous * current;
                break;
            case "-":
                computation = previous - current;
                break;
            case '+':
                computation = previous + current;
                break;
            default:
                return;
        };
        this.currentOutput = computation;
        this.operation = undefined;
        this.previousOutput = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '0';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }
        if (decimalDigits !== undefined) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOutputText.innerHTML = this.getDisplayNumber(this.currentOutput);
        if (this.operation !== undefined) {
            this.previousOutputText.innerHTML = `${this.getDisplayNumber(this.previousOutput)} ${this.operation}`;
        } else {
            this.previousOutputText.innerHTML = '';
        }
    }
}

const calculator = new Calculator(previousOutputText, currentOutputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.value);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});