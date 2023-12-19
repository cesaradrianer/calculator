const numbers = document.getElementsByClassName('number')
const operations = document.getElementsByClassName('operation')
const input = document.getElementById('input')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const inputDiv = document.getElementById('input_wrapper')

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', () => {

        input.value += numbers[i].value

    })

}

let firstValue
let operator
let secondValue

for (let j = 0; j < operations.length; j++) {

    operations[j].addEventListener('click', () => {

        firstValue = parseInt(input.value)
        operator = operations[j].innerHTML
        input.value = ""

    })

}

equals.addEventListener('click', () => {
    secondValue = parseInt(input.value)
    input.value = operate(firstValue, operator, secondValue)
})

clear.onclick = () => {input.value = ""}

function operate(num1, operator, num2) {

    switch(operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }

}