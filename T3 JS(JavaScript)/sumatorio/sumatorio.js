

const Funciones = {
    // SET DATOS 
    numeros: [],

    setDatos: function(vector) {
        this.numeros = vector;
    },

    // SUMATORIO 
    Sumatorio: function() {
        let suma = 0;
        for (let i = 0; i < this.numeros.length; i++) {
            suma += this.numeros[i];
        }
        return suma;
    },

    // Multiplicación
    Multiplicacion: function() {
        let multi = 1;
        for (let i = 0; i < this.numeros.length; i++) {
            multi *= this.numeros[i];
        }
        return multi;
    }
};

// Pedir números al usuario y convertirlos a tipo numérico
let numeros_prueba = [];
numeros_prueba.push(Number(prompt("Introduce un número")));
numeros_prueba.push(Number(prompt("Introduceme otro número")));
numeros_prueba.push(Number(prompt("Introduceme un último número")));

// Establecer los datos y calcular resultados
Funciones.setDatos(numeros_prueba);
let multiplicacion = Funciones.Multiplicacion();
let sumatorio = Funciones.Sumatorio();

// Mostrar resultados en la página
document.write("La multiplicación de los 3 números es: " + multiplicacion + "<br>");
document.write("El sumatorio de los 3 números es: " + sumatorio);
