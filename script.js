

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
    btn.onclick = () => {

        let value = btn.innerText;

        if (value === "=") {
            input.value = eval(expression);
        }
        else if (value === "AC") {
            expression = "";
            input.value = "";
        }
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        }
        else {
            expression += value;
            input.value = expression;
        }
    };
});
