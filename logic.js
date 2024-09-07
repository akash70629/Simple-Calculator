let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let input = document.querySelector('input');

        // Handle "=" button to evaluate the expression
        if (e.target.innerHTML == '=') {
            try {
                // Safely evaluate the expression if valid
                string = eval(string);
                input.value = string;
            } catch {
                // Display error if eval fails
                input.value = "Error";
                string = "";
            }
        }

        // Handle "AC" button to clear all input
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        // Handle "C" button to delete last character
        else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            input.value = string;
        }

        // Prevent adding multiple decimal points in a number
        else if (e.target.innerHTML == '.') {
            // Check if the last number already has a decimal point
            let lastNumber = string.split(/[\+\-\*\/]/).pop();
            if (!lastNumber.includes('.')) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }

        // Prevent consecutive operators
        else if (['+', '-', '*', '/'].includes(e.target.innerHTML)) {
            let lastChar = string[string.length - 1];
            if (!['+', '-', '*', '/'].includes(lastChar)) {
                string += e.target.innerHTML;
                input.value = string;
            }
        }

        // For any other valid button press
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
