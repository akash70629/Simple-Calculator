let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
                 // Check if the string contains a '%' sign
            if (string.includes('%')) {
                // If it does, convert it to a decimal value for calculation
                string = string.replace('%', '/100*');
            }
            // Evaluate the expression
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                // Handle evaluation errors, e.g., if the expression is invalid
                document.querySelector('input').value = 'Error';
                string = ''; // Clear the string in case of an error
            }

        else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }

        else {
            // console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
