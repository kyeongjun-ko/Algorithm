/**
 * @param {string[]} tokens
 * @return {number}
 */

const calculator = ([first, second], operator) => {
    switch (operator) {
        case "*":
            return first * second;
        case "/":
            return first / second;
        case "+":
            return first + second;
        case "-":
            return first - second;
    }
};

var evalRPN = function(tokens) {
    const operators = ["+", "-", "/", "*"];
    const numberStack = [];
    const operatorQueue = [];

    for (const token of tokens) {
        if (operators.includes(token)) {
            operatorQueue.push(token);
        } else {
            numberStack.push(Number(token));
        }

        while (operatorQueue.length !== 0 && numberStack.length > 1) {
            const [second, first] = [numberStack.pop(), numberStack.pop()];
            const operator = operatorQueue.shift();
            const result = calculator([first, second], operator);

            numberStack.push(Math.trunc(result));
        }
    }

    return numberStack[0];
};