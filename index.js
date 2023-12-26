/* Hi guys, welcome to my JS code for this little calculator, hope my explaining is decent enough */
/* First, let's get everything we need from the DOM in index.html */
const numbers = document.getElementsByClassName('number')
const operations = document.getElementsByClassName('operation')
const input = document.getElementById('input')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const inputDiv = document.getElementById('input_wrapper')
const deleteBtn = document.getElementById('delete')

/* Now, let's add an event that will add the values of each numeric button to our input with a for loop*/
for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', () => {

        if (flag == true) {

            input.value += numbers[i].value

        } else {

            return null

        }
        
    })

}

/* Now we have to define some important variables that we have to update with each operation done by our calculator */
let firstValue
let operator
let secondValue
let flag = true

/* First, the user has to input a first value to be worked with */
/* Next, the user has to choose an operation, when the user clicks on any operation button, an event will trigger that defines 'firstValue' as the numbers written on our input, and also defines 'operator' as the chosen operation */
for (let j = 0; j < operations.length; j++) {

    operations[j].addEventListener('click', () => {

        if (flag == true) {

           firstValue = parseFloat(input.value)
           operator = operations[j].innerHTML
           input.value = ""

        } else {

            return null

        }

    })

}

/* Second, the user now has to write a second value for the operation to work with */
/* And when the user clicks on the equals button, another event triggers, now this time 'secondValue' gets defined as the numbers written on the input, and finally the 'operate' function executes and writes the result inside our input */
equals.addEventListener('click', () => {

    if (flag == true) {

        secondValue = parseFloat(input.value)
        input.value = operate(firstValue, operator, secondValue)

    } else {

        return null

    }
    
})

/* When the user clicks on the 'CE' button, an event defines the value of our input as an empty string, and also defines our working variables as null */
clear.onclick = () => {
    flag = true
    input.value = ""
    num1 = null
    num2 = null
    operator = null
}

/* When the user clicks on the 'DEL' button, an event takes the text inside our input, creates an array from it, and removes the last element from it, only to then redefine the text inside our input as the modified array*/
deleteBtn.onclick = () => {

    if (flag == true) {

        let inputText = Array.from(input.value)
        inputText.pop()
        input.value = inputText.join('')

    } else {

        return null

    }

}

/* This function takes all the necessary data and first checks if all variables aren't empty, if nothing goes wrong then a switch statement checks for the operation type, and performs the operation */
function operate(num1, operator, num2) {

    if (num1 == undefined || num2 == undefined) {
        flag = false
        return "INVALID OPERATION"
    }

    switch(operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 == 0) {
                flag = false
                return "Wait, are you crazy?"
            } else {
                return num1 / num2
            }
    }

}