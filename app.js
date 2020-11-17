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
        this.currentOutput = '';
        this.previousOutput = '';
        this.operation = undefined;
    }

    delete() {

    }

    addNumber(number) {
        if (number === '.' && this.currentOutput.includes('.')) return;
        this.currentOutput = this.currentOutput.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOutputText.innerHTML = this.currentOutput
    }
}

const calculator = new Calculator(previousOutputText, currentOutputText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.value);
        calculator.updateDisplay();
    });
});