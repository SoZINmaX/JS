// script to find middle number from three

let numberOne = prompt('Inser number One');
let numberTwo = prompt('Inser number Two');
let numberThree = prompt('Inser number Three');
let error = false;

if (numberOne === '') {
    error = true
} else if (numberOne) {
    numberOne = Number(numberOne)
};

if (numberTwo === '') {
    error = true
} else if (numberTwo) {
    numberTwo = Number(numberTwo)
};

if (numberThree === '') {
    error = true
} else if (numberThree) {
    numberThree = Number(numberThree)
};

if (error === true){
    alert('No valid input')
} else {
    const middleNumber = (numberOne + numberTwo + numberThree)/3
    alert(middleNumber)
}

