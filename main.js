var altura, peso, salida, resultado,estado

function calcularimc(){

altura=parseFloat(document.getElementById("altura").value)
peso=parseFloat(document.getElementById("peso").value)

resultado=peso / (altura*altura)

if(resultado<18.5){
    estado="bajo";

}
else if(resultado<=24.5){
    estado="normal";
}
else if(resultado<=29.9){
    estado="sobrepeso";

}
else{
    estado="obeso";

}

imc.value=resultado
leyenda.value=estado
}
