$(document).ready(function() {
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    $('button').on('click', function() {
        const value = $(this).data('value');

        if (value === 'C') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            $('#display').val('');
        } else if (value === '=') {
            if (firstOperand && operator && currentInput) {
                secondOperand = currentInput;
                const result = calculate(firstOperand, secondOperand, operator);
                $('#display').val(result);
                currentInput = result;
                operator = '';
                firstOperand = '';
                secondOperand = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                firstOperand = currentInput;
                operator = value;
                currentInput = '';
            }
        } else {
            currentInput += value;
            $('#display').val(currentInput);
        }
    });

    function calculate(a, b, op) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});