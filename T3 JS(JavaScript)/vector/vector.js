let sum = 0;

while (true) {
    let input = prompt("Ingrese un número (o 'N' para terminar):");
    if (input.toUpperCase() === 'N') {
        break;
    }
    let number = parseFloat(input);
    if (!isNaN(number)) {
        sum += number;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

alert ("Sumatorio de los números: " + sum);
