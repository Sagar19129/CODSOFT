function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearDisplay() {
    const result = document.getElementById("result");
    result.value = "";
}

function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value) || 0;
    } catch {
        result.value = "Error";
    }
}
