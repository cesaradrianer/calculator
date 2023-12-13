const numbers = document.getElementsByClassName('number')
const operations = document.getElementsByClassName('operations')
const input = document.getElementById('input')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', () => {

        input.value += numbers[i].value

    })

}

function operate(num1, operator, num2) {

    switch(operator) {
        case '+':
            input.value = num1 + num2
        case '-':
            input.value = num1 - num2
        case '*':
            input.value = num1 * num2
        case '/':
            input.value = num1 / num2
    }

}

let firstNumber
let secondNumber
let operator

function setNum1() {
    firstNumber = input.value
}

function setNum2() {
    secondNumber = input.value
}

for (let j = 0; j < operations.length; j++) {

    operations[i].addEventListener('click', () => {

        input.value = ''
        operator = operations[i].value

    })

}