let display = document.getElementById("display");

function add(x) {
    display.value += x;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}