// simple calculator pure JS, no functions implemented

const operator = prompt('choose and type one of operators: add sub mult div');

let number1 = prompt('first number');
number1 = Number(number1);

let number2 = prompt('second number');
number2 = Number(number2);

const calc = (number1, number2, operator) => {
    switch (operator) {
        case 'add':
            return (number1 + number2);
        case 'sub':
            return (number1 - number2);
        case 'div':
            if (number2 === 0) {
                return 'error'
            } else {
                return (number1 / number2);
            }
        case 'mult':
            return (number1 * number2);
        default:
            break
    };
};

const operatorChanged = (operator) => {
    switch (operator) {
        case 'add':
            return ('+');
        case 'sub':
            return ("-");
        case 'div':
            return ("/");
        case 'mult':
            return ("*");
        default:
            break
    };
};

if (calc(number1, number2, operator) === undefined || number1 === 0 || number2 === 0 ) {
    alert("Error");
} else {
    alert(`${number1} ${operatorChanged(operator)} ${number2} = ${calc(number1, number2, operator)}`)
}