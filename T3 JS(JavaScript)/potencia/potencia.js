function potencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    return base * potencia(base, exponente - 1);
}

let num1 = parseInt(prompt("Introduzca un número: "));
let num2 = parseInt(prompt("Introduzca otro número: "));
let Potencia = prompt("¿Quiere que hagamos la potencia? (si/no)").toLowerCase();

if (Potencia === "si") {
    let resultado = potencia(num1, num2);
    document.write(`El resultado de ${num1}^${num2} es: ${resultado}`);
} else {
    alert("VALE COLEGA");
}
