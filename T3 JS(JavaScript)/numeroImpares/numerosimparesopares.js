let number =  [];
let numeroImpares = 0;
let numeroPares = 0;

while (true){
    let numerosIntroducidos = prompt ("Ingresame un numero (N para terminar)");
    let number = numerosIntroducidos;


    if (number == "N"){
        break;
    }
    if (isNaN(number)){
        alert("Debes introducir un numero colega");
    }
    
}