let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
           string = eval(string);
            document.querySelector('input').value = string;
        }
            
       else if (string.includes('%')) {
                // If it does, convert it to a decimal value for calculation
                string = string.replace('%', '/100*');
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
