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
    }

    clear() {

    }

    delete() {

    }

    addNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const calculator = new Calculator(previousOutputText, currentOutputText);