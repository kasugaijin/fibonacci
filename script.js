//A simple Fibonacci calculator. Did not use innerHtml to control dynamic content as it is using user input
//The "toLocaleString()" takes a number and comma separates it at the thousands for readability

let userInput = document.getElementById("user-number");
let userSubmit = document.getElementById("submit");
let output = document.getElementById("output");
let history = document.getElementById("history");

userSubmit.addEventListener('click', fibonacci);

function fibonacci () {
    let input = userInput.value;
    if (input < 0 || input == 0 || input > 100) {
        output.textContent = "Make sure it's a number between 1 and 100";
    } else {
    makeArray = () => {
        let array = [1, 1]
        for (let i = 2; i < 100; i++) {
            array.push((array[i-1] + array[i-2]));
        }
        return array;
    }
    let fibNumber = makeArray()[input-1];
    output.textContent = "Fibonacci (" + input + ") is " + fibNumber.toLocaleString();
    history.textContent += "\r\n" + "(" + input + ") " + "is " + fibNumber.toLocaleString();
    userInput.value = "";
    }
};