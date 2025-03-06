$(document).ready(main)

function mostrar_pares(){
    let objetos = $(".p_par")
    objetos.slideDown()
}

function mostrar_impares(){
    let objetos = $(".p_impar")
    objetos.slideDown()
}

function ocultar_pares(){
    let objetos = $(".p_par")
    objetos.slideUp()
}

function ocultar_impares(){
    let objetos = $(".p_impar")
    objetos.slideUp()
}


function main(){

    //Mostrar elementos pares e impares
    $("#mostrar_pares").click(mostrar_pares)
    $("#mostrar_impares").click(mostrar_impares)


    // Ocultar los elementos
    $("#ocultar_pares").click(ocultar_pares)
    $("#ocultar_impares").click(ocultar_impares)

}
