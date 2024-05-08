const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (number1) => {
    rl.question('Enter the second number: ', (number2) => {
        rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
            let result;
            switch(operation) {
                case 'add':
                    result = parseFloat(number1) + parseFloat(number2);
                    break;
                case 'subtract':
                    result = parseFloat(number1) - parseFloat(number2);
                    break;
                case 'multiply':
                    result = parseFloat(number1) * parseFloat(number2);
                    break;
                case 'divide':
                    if(number2 != '0') {
                        result = parseFloat(number1) / parseFloat(number2);
                    } else {
                        console.log('Error! Division by zero.');
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log('Invalid operation!');
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});