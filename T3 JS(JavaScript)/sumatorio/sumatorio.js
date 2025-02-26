// Creamos una constante "Funciones" para agrupar todas las funciones relacionadas
const Funciones = {
    // ARRAY PARA ALMACENAR LOS NÚMEROS INGRESADOS
    numeros: [],

    // FUNCIÓN PARA ASIGNAR LOS NÚMEROS AL ARRAY
    setDatos: function(vector) {
        this.numeros = vector; // Guardamos los valores en el array "numeros"
    },

    // FUNCIÓN PARA CALCULAR EL SUMATORIO DE LOS NÚMEROS INGRESADOS
    Sumatorio: function() {
        let suma = 0; // Variable para almacenar la suma
        //Recorremos el array de numeros 
        for (let i = 0; i < this.numeros.length; i++) {
            suma += this.numeros[i]; // Se suman todos los números del array
        }
        return suma; // Se devuelve el resultado final de la suma
    },

    // FUNCIÓN PARA CALCULAR LA MULTIPLICACIÓN DE LOS NÚMEROS INGRESADOS
    Multiplicacion: function() {
        let multi = 1; // Se inicializa en 1 para que la multiplicacion no salga erronea ya que cualquier numero multiplicado por 0 es 0 
        for (let i = 0; i < this.numeros.length; i++) {
            multi *= this.numeros[i]; // Se multiplican todos los números del array
        }
        return multi; // Se devuelve  el resultado final de la multiplicación
    },

    // FUNCIÓN PARA CONTAR CUÁNTOS NÚMEROS IMPARES HAY EN EL ARRAY
    Impares: function() {
        let contador = 0; // Variable para contar los números impares
        
        // Recorremos el array de números
        for (let i = 0; i < this.numeros.length; i++) {
            // Si el número no es divisible por 2 (tiene residuo distinto de 0), es impar
            if (this.numeros[i] % 2 !== 0) {
                contador++; // Se incrementa el contador de impares
            }
        }

        return contador; // Se devuelve el total de números impares encontrados
    },
     // FUNCIÓN PARA SABER CUAL ES EL NUMERO MAXIMO DE TODO EL ARRAYS
    Maximo: function(){
        let max = this.numeros[0]; // Variable para almacenar el valor maximo
        //Recorremos el arrays de numeros
        for (let i = 0; i < this.numeros.length; i++) {
            // Si el numero que tenemos es mayor que el variable max en este momento , la variabel max  es este nuevo numero
            if (this.numeros[i] > max) {
                max = this.numeros[i];
            }
        }
        return max; // Se devuelve el valor maximo encontrado
    },
    Minimo: function(){
        let min = this.numeros[0]; // Variable para almacenar el valor minimo
        for (let i = 0; i < this.numeros.length; i++) {
            // Si el numero que tenemos es menor  que el variable min  en este momento , la variabel min  es este nuevo numero
            if(this.numeros[i]< min)
                min= this.numeros[i]
        }
        return min; // Se devuelve el valor minimo encontrado
    }
};

// ARRAY PARA ALMACENAR LOS NÚMEROS INGRESADOS POR EL USUARIO
let numeros_prueba = [];
// Pedimos tres números al usuario y los convertimos a tipo numérico
numeros_prueba.push(Number(prompt("Introduce un número")));
numeros_prueba.push(Number(prompt("Introduceme otro número")));
numeros_prueba.push(Number(prompt("Introduceme un último número")));

// ASIGNAMOS LOS NÚMEROS AL OBJETO Funciones
Funciones.setDatos(numeros_prueba);

// CALCULAMOS LOS RESULTADOS UTILIZANDO LAS FUNCIONES DEL OBJETO Funciones
let multiplicacion = Funciones.Multiplicacion(); // Calcula la multiplicación de los números
let sumatorio = Funciones.Sumatorio(); // Calcula la suma de los números
let contador = Funciones.Impares(); // Cuenta cuántos números impares hay
let maximo = Funciones.Maximo(); // Obtiene el número máximo
let minimo = Funciones.Minimo();// Obtiene el numero minimo

// MOSTRAMOS LOS RESULTADOS EN CONSOLA
console.log("Números introducidos:", numeros_prueba);
console.log("La multiplicación de los 3 números es:", multiplicacion);
console.log("El sumatorio de los 3 números es:", sumatorio);
console.log("El número de números impares es:", contador);

// MOSTRAMOS LOS RESULTADOS EN LA PÁGINA WEB
document.write("La multiplicación de los 3 números es: " + multiplicacion + "<br>");
document.write("El sumatorio de los 3 números es: " + sumatorio + "<br>");
document.write("El número de números impares que hay son: " + contador + "</br>");
document.write ("El numero maximo es : " + maximo + "<br>"); 
document.write ("El numero minimo es : " + minimo + "<br>");
