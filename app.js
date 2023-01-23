//1.soru
/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */

const myColculater=(operator,value1,value2) =>{
    if(operator === '+'){
       return value1 + value2 
    }
    else if(operator === '-'){
       return value1 - value2 
    }
    else if(operator === '/'){
       return value1 / value2 
    }
    else if(operator === '*'){
       return value1 * value2 
    }
}
console.log(myColculater('*',8,6));
// diger cozum
const calculate = function (operator, num1, num2) {
    let result = 0
    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default:
            return `invalid operator`
    }
    return result
}

console.log(calculate("*", 5, 6));
