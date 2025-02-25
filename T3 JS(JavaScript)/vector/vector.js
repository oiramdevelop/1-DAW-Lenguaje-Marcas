let sum = 0;

while (true) {
    let input = prompt("Ingrese un número (o 'N' para terminar):");
    if (input.toUpperCase() === 'N') {
        alert("Aqui tienes loco")
        break;
    }
    let number = parseFloat(input);
    if (!isNaN(number)) {
        sum += number;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

document.write("/n Sumatorio de los números: " + sum);
