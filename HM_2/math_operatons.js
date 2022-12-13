// script to carry out mathematical operations with two digits given by two prompts

let numberOne = prompt("Type first number")
let numberTwo = prompt("Type second number")
let error = false
if (numberOne === '') {
    error = true
} else if (numberOne) {
    numberOne = Number(numberOne)
}

if (numberTwo === '') {
    error = true
} else if (numberTwo) {
    numberTwo = Number(numberTwo)
}
if (error === true){
    alert('No valid input')
} else {
    alert(numberOne + '+' + numberTwo + '=' + (numberOne+numberTwo));
    alert(numberOne + '-' + numberTwo + '=' + (numberOne-numberTwo));
    alert(numberOne + '*' + numberTwo + '=' + (numberOne*numberTwo));
    if (numberTwo === 0) {
            alert("Cannot divide by zero")
    } else {
        alert(numberOne + '/' + numberTwo + '=' + (numberOne/numberTwo));
    }
}