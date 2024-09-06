function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    let expression = document.getElementById("display").value;

    // Reemplazar el símbolo de porcentaje por su equivalente decimal
    expression = expression.replace(/%/g, '/100');

    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}