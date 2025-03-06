$(document).ready(function(e){
    $(".calcular").click(function(e){
        var , altura, resultado;
        base=Number($(".base").val());
        altura=Number($(".altura").val());
        resultado=1/2*base*altura;
        $(".resultado").html("<p>El area del triangulo es "+resultado+"</p>");
    });
});